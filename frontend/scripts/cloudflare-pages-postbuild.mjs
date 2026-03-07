import { promises as fs } from "node:fs";
import path from "node:path";

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const root = process.cwd();
  const workerSrc = path.join(root, ".open-next", "worker.js");
  const assetsDir = path.join(root, ".open-next", "assets");
  const workerDest = path.join(assetsDir, "_worker.js");

  if (!(await exists(workerSrc))) {
    throw new Error(`No existe el worker fuente: ${workerSrc}`);
  }

  if (!(await exists(assetsDir))) {
    throw new Error(`No existe el directorio de assets: ${assetsDir}`);
  }

  await fs.copyFile(workerSrc, workerDest);

  console.log("✅ Cloudflare Pages postbuild listo:");
  console.log(`- ${workerDest}`);

  const checks = [
    path.join(assetsDir, "_next"),
    path.join(assetsDir, "_next", "static"),
    path.join(assetsDir, "favicon.ico"),
    path.join(assetsDir, "logos"),
    path.join(assetsDir, "logos", "logo-mark.png"),
  ];

  for (const file of checks) {
    console.log(`- ${path.relative(root, file)}: ${(await exists(file)) ? "OK" : "FALTA"}`);
  }
}

main().catch((err) => {
  console.error("❌ Error en postbuild de Cloudflare Pages");
  console.error(err);
  process.exit(1);
});