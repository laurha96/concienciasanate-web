import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const BRAND_GREEN = "#7FBF3F";
const BG_WARM = "#FAF8F3";

const root = path.resolve(process.cwd());

const inputMarkWhite = path.join(root, "public", "brand", "logo-mark-white.png");

const outPublicBrand = path.join(root, "public", "brand");
const outPublic = path.join(root, "public");

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function svgBackgroundRect(hex) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="${hex}"/></svg>`;
}

async function tintedMarkPng(size) {
  // Tinta el logo blanco a verde, preservando alpha.
  return sharp(inputMarkWhite)
    .resize(size, size, { fit: "contain" })
    .ensureAlpha()
    .tint(BRAND_GREEN)
    .png()
    .toBuffer();
}

async function compositeOnBackground({ canvasSize, markSize, outPath }) {
  const mark = await tintedMarkPng(markSize);

  const background = await sharp(Buffer.from(svgBackgroundRect(BG_WARM)))
    .resize(canvasSize, canvasSize)
    .png()
    .toBuffer();

  const left = Math.round((canvasSize - markSize) / 2);
  const top = Math.round((canvasSize - markSize) / 2);

  await sharp(background)
    .composite([{ input: mark, left, top }])
    .png()
    .toFile(outPath);
}

async function writeBuffer(filePath, buffer) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, buffer);
}

async function main() {
  await ensureDir(outPublicBrand);
  await ensureDir(outPublic);

  // 1) Export mark verde (transparente) para UI.
  const mark256 = await tintedMarkPng(256);
  const mark512 = await tintedMarkPng(512);
  await writeBuffer(path.join(outPublicBrand, "logo-mark.png"), mark256);
  await writeBuffer(path.join(outPublicBrand, "logo-mark@2x.png"), mark512);

  // 2) Static icons (Cloudflare Pages friendly).
  // icon.png recomendado (512) + apple-icon (180). Usamos fondo cálido para buena legibilidad.
  await compositeOnBackground({
    canvasSize: 512,
    markSize: 340,
    outPath: path.join(outPublic, "icon.png"),
  });

  await compositeOnBackground({
    canvasSize: 180,
    markSize: 128,
    outPath: path.join(outPublic, "apple-icon.png"),
  });

  // 3) OpenGraph/Twitter (opcionales pero útiles). Diseño minimalista: fondo cálido + mark centrado.
  const ogOut = path.join(outPublic, "opengraph-image.png");
  const twOut = path.join(outPublic, "twitter-image.png");

  const ogCanvas = await sharp(Buffer.from(svgBackgroundRect(BG_WARM)))
    .resize(1200, 630)
    .png()
    .toBuffer();

  const markOg = await tintedMarkPng(420);
  await sharp(ogCanvas)
    .composite([
      {
        input: markOg,
        left: Math.round((1200 - 420) / 2),
        top: Math.round((630 - 420) / 2),
      },
    ])
    .png()
    .toFile(ogOut);

  await fs.copyFile(ogOut, twOut);

  // 4) favicon.ico (16/32/48/64) — fondo cálido + mark verde.
  const faviconPngs = await Promise.all(
    [16, 32, 48, 64].map(async (s) => {
      const markSize = Math.round(s * 0.72);
      const mark = await tintedMarkPng(markSize);
      const background = await sharp(Buffer.from(svgBackgroundRect(BG_WARM)))
        .resize(s, s)
        .png()
        .toBuffer();

      const left = Math.round((s - markSize) / 2);
      const top = Math.round((s - markSize) / 2);

      return sharp(background)
        .composite([{ input: mark, left, top }])
        .png()
        .toBuffer();
    })
  );

  const ico = await pngToIco(faviconPngs);

  // Escribimos en public/ para request directo /favicon.ico.
  await writeBuffer(path.join(root, "public", "favicon.ico"), ico);

  // 5) Mantener `public/icon.svg` consistente: lo apuntamos a la versión png (solo como conveniencia).
  const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"64\" height=\"64\" viewBox=\"0 0 64 64\">` +
    `<image href=\"/brand/logo-mark.png\" x=\"0\" y=\"0\" width=\"64\" height=\"64\" />` +
    `</svg>\n`;
  await writeBuffer(path.join(root, "public", "icon.svg"), Buffer.from(iconSvg));

  console.log("✅ Iconos generados:");
  console.log("- public/favicon.ico");
  console.log("- public/icon.png, public/apple-icon.png");
  console.log("- public/opengraph-image.png, public/twitter-image.png");
  console.log("- public/brand/logo-mark.png");
}

main().catch((err) => {
  console.error("❌ Error generando iconos:", err);
  process.exit(1);
});
