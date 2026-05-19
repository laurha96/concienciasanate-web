import re
import ssl
import sys
import urllib.request
from typing import Dict, List, Tuple


def fetch(url: str, ctx: ssl.SSLContext) -> Tuple[int, Dict[str, str], bytes]:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "diagnostic/1.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )
    with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
        return resp.status, dict(resp.headers.items()), resp.read()


def head_or_range(url: str, ctx: ssl.SSLContext) -> str:
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "diagnostic/1.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            return str(resp.status)
    except urllib.error.HTTPError as exc:
        return str(getattr(exc, "code", "HTTPError"))
    except Exception:
        try:
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": "diagnostic/1.0",
                    "Range": "bytes=0-200",
                },
            )
            with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
                return str(resp.status)
        except urllib.error.HTTPError as exc:
            return str(getattr(exc, "code", "HTTPError"))
        except Exception as exc:
            return f"ERR({type(exc).__name__})"


def fetch_snippet(url: str, ctx: ssl.SSLContext) -> str:
    try:
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "diagnostic/1.0",
                "Range": "bytes=0-300",
            },
        )
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            data = resp.read(350)
            ctype = resp.headers.get("Content-Type")
            return f"content-type={ctype} snippet={data[:200]!r}"
    except urllib.error.HTTPError as exc:
        try:
            data = exc.read(350)
        except Exception:
            data = b""
        ctype = exc.headers.get("Content-Type") if getattr(exc, "headers", None) else None
        return f"http={getattr(exc,'code',None)} content-type={ctype} snippet={data[:200]!r}"
    except Exception as exc:
        return f"ERR({type(exc).__name__})"


def main() -> int:
    base = sys.argv[1] if len(sys.argv) > 1 else "https://www.concienciasanate.com"
    page_path = sys.argv[2] if len(sys.argv) > 2 else "/sobre"

    ctx = ssl.create_default_context()

    status, headers, body = fetch(base + page_path, ctx)
    cache_control = headers.get("Cache-Control") or headers.get("cache-control")
    print("PAGE", base + page_path)
    print("PAGE_STATUS", status)
    print("CACHE_CONTROL", cache_control)

    html = body.decode("utf-8", errors="ignore")
    chunks: List[str] = sorted(
        set(re.findall(r"/_next/static/chunks/[a-zA-Z0-9._-]+\.(?:js|css)", html))
    )
    print("CHUNKS_IN_HTML", len(chunks))

    suspects = [
        "/_next/static/chunks/be123557ff99b468.css",
        "/_next/static/chunks/73058fec810634f1.js",
        "/_next/static/chunks/a6dad97d9634a72d.js",
    ]

    probe: List[str] = chunks[:25]
    for s in suspects:
        if s in chunks and s not in probe:
            probe.append(s)

    bad: List[Tuple[str, str]] = []
    for path in probe:
        code = head_or_range(base + path, ctx)
        print(code, path)
        if code not in {"200", "206"}:
            bad.append((code, path))

    print("NON_200_COUNT", len(bad))
    if bad:
        print("NON_200_SAMPLE")
        for code, path in bad[:10]:
            print(" ", code, path)
        print("NON_200_SNIPPETS")
        for code, path in bad[:5]:
            print(" ", path, fetch_snippet(base + path, ctx))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
