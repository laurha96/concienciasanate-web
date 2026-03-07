import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(process.cwd());
const openNextDir = path.join(projectRoot, ".open-next");
const assetsDir = path.join(openNextDir, "assets");
const nextStaticDir = path.join(projectRoot, ".next", "static");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(src, dest) {
  if (!(await exists(src))) return;
  await fs.rm(dest, { recursive: true, force: true });
  await fs.cp(src, dest, { recursive: true });
}

async function listFilesRecursive(rootDir) {
  const results = [];
  async function walk(currentDir) {
    let entries;
    try {
      entries = await fs.readdir(currentDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile()) {
        results.push(fullPath);
      }
    }
  }
  await walk(rootDir);
  return results;
}

async function debugCheckNextStaticAssets({ projectRoot, assetsDir }) {
  const nextServerAppDir = path.join(projectRoot, ".next", "server", "app");
  const htmlFiles = (await listFilesRecursive(nextServerAppDir)).filter((f) => f.endsWith(".html"));

  const chunkRefs = new Set();
  for (const htmlPath of htmlFiles) {
    const html = await fs.readFile(htmlPath, "utf8");
    const matches = html.matchAll(/\/_next\/static\/[^"']+?\.(?:js|css)/g);
    for (const m of matches) chunkRefs.add(m[0]);
  }

  const refs = Array.from(chunkRefs).sort();
  const missing = [];
  for (const ref of refs) {
    const rel = ref.startsWith("/") ? ref.slice(1) : ref;
    const outPath = path.join(assetsDir, rel);
    if (!(await exists(outPath))) missing.push(ref);
  }

  const chunksDir = path.join(assetsDir, "_next", "static", "chunks");
  const chunkFiles = (await listFilesRecursive(chunksDir)).filter((f) => f.endsWith(".js") || f.endsWith(".css"));

  console.log("ℹ️ Debug Next static assets:");
  console.log(`- HTML prerender encontrados: ${htmlFiles.length}`);
  console.log(`- Referencias a /_next/static detectadas: ${refs.length}`);
  console.log(`- Archivos en output _next/static/chunks: ${chunkFiles.length}`);
  if (missing.length > 0) {
    console.log(`⚠️ Faltan ${missing.length} assets referenciados en HTML (primeros 30):`);
    for (const ref of missing.slice(0, 30)) console.log(`  - ${ref}`);
  } else {
    console.log("✅ Todos los assets /_next/static referenciados en HTML existen en el output.");
  }
}

async function main() {
  const workerEntry = path.join(openNextDir, "worker.js");
  if (!(await exists(workerEntry))) {
    throw new Error(
      `No se encontró ${workerEntry}. Ejecuta primero: opennextjs-cloudflare build`
    );
  }

  if (!(await exists(assetsDir))) {
    throw new Error(
      `No se encontró ${assetsDir}. El build de OpenNext no generó assets.`
    );
  }

  // Cloudflare Pages reconoce `_worker.js` dentro del directorio de salida.
  // OpenNext genera un worker multi-archivo (con imports relativos), así que
  // copiamos también sus módulos al mismo directorio para que el bundler de
  // Pages pueda resolverlos.
  await fs.copyFile(workerEntry, path.join(assetsDir, "_worker.js"));

  // En algunos despliegues, los assets de Next pueden no quedar completos en
  // `.open-next/assets/_next/static`. Para evitar 404 en `/_next/static/...`,
  // sincronizamos explícitamente desde `.next/static`.
  await copyDir(nextStaticDir, path.join(assetsDir, "_next", "static"));

  await debugCheckNextStaticAssets({ projectRoot, assetsDir });

  await copyDir(path.join(openNextDir, "cloudflare"), path.join(assetsDir, "cloudflare"));
  await copyDir(path.join(openNextDir, "middleware"), path.join(assetsDir, "middleware"));
  await copyDir(
    path.join(openNextDir, "server-functions"),
    path.join(assetsDir, "server-functions")
  );
  await copyDir(path.join(openNextDir, ".build"), path.join(assetsDir, ".build"));

  // Nota: no copiamos cache/ u otros artefactos no requeridos.
  console.log("✅ Cloudflare Pages postbuild listo:");
  console.log(`- ${path.relative(projectRoot, path.join(assetsDir, "_worker.js"))}`);
}

main().catch((err) => {
  console.error("❌ Error en cloudflare-pages-postbuild:", err);
  process.exit(1);
});
