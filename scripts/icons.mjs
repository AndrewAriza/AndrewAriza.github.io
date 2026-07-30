// Renders the favicon set into public/ from one inline SVG mark.
// Crawlable icon files matter: Google can't use a data:-URI favicon in results.
// Run with: pnpm icons
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const BG = "#0b0b0c";
const ACCENT = "#ff6a3d";

/** @param {number} size @param {number} radius */
const mark = (size, radius) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="${radius}" fill="${BG}"/>
  <circle cx="16" cy="16" r="5" fill="${ACCENT}"/>
</svg>`;

const out = (name) => new URL(`../public/${name}`, import.meta.url);

/** Wraps a PNG in an ICO container (Vista+ reads PNG payloads directly). */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // one image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // width
  entry.writeUInt8(size === 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // palette colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12);
  return Buffer.concat([header, entry, png]);
}

const svg = mark(32, 8);
await writeFile(out("favicon.svg"), svg);

const png32 = await sharp(Buffer.from(mark(32, 8))).resize(32, 32).png().toBuffer();
await writeFile(out("favicon.ico"), pngToIco(png32, 32));

// iOS masks the corners itself, so the source is a full-bleed square
const touch = await sharp(Buffer.from(mark(180, 0))).resize(180, 180).png().toBuffer();
await writeFile(out("apple-touch-icon.png"), touch);

console.log("favicon.svg, favicon.ico (32px), apple-touch-icon.png (180px) written");
