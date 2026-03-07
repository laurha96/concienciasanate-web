import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(process.cwd());
const openNextDir = path.join(projectRoot, ".open-next");
const assetsDir = path.join(openNextDir, "assets");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resetDir(dirPath) {
  await fs.rm(dirPath, { recursive: true, force: true });
  await fs.mkdir(dirPath, { recursive: true });
}

async function copyDir(src, dest) {
  if (!(await exists(src))) return;
  await fs.rm(dest, { recursive: true, force: true });
  await fs.cp(src, dest, { recursive: true });
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
