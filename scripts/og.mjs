// Renders public/og.png (1200×630 social card) from an inline SVG via sharp.
// Run with: pnpm og
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;
const SANS = "Helvetica Neue, Helvetica, Arial, sans-serif";
const MONO = "SF Mono, Menlo, DejaVu Sans Mono, monospace";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="glow" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#ff6a3d" stop-opacity="0.16"/>
      <stop offset="0.6" stop-color="#ff6a3d" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#0b0b0c"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <g stroke="rgba(255,255,255,0.05)" stroke-width="1">
    ${Array.from({ length: 12 }, (_, i) => `<line x1="${(i + 1) * 100}" y1="0" x2="${(i + 1) * 100}" y2="${H}"/>`).join("")}
    ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${(i + 1) * 100}" x2="${W}" y2="${(i + 1) * 100}"/>`).join("")}
  </g>

  <circle cx="88" cy="86" r="7" fill="#ff6a3d"/>
  <text x="108" y="92" font-family="${MONO}" font-size="20" fill="#b4b4b6" letter-spacing="1">andrewariza</text>

  <text x="80" y="300" font-family="${SANS}" font-size="128" font-weight="500" fill="#ededed" letter-spacing="-4">Andrés</text>
  <text x="80" y="416" font-family="${SANS}" font-size="128" font-weight="500" fill="#ededed" letter-spacing="-4">Ariza<tspan fill="#7a7a7d">.</tspan></text>

  <text x="80" y="492" font-family="${MONO}" font-size="24" fill="#b4b4b6" letter-spacing="1">Senior Software Engineer · 15+ años</text>

  <line x1="80" y1="540" x2="${W - 80}" y2="540" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="80" y="580" font-family="${MONO}" font-size="20" fill="#7a7a7d" letter-spacing="1">andrewariza.github.io</text>
  <text x="${W - 80}" y="580" text-anchor="end" font-family="${MONO}" font-size="20" fill="#7a7a7d" letter-spacing="1">Bogotá, Colombia</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(new URL("../public/og.png", import.meta.url), png);
console.log(`og.png written (${(png.length / 1024).toFixed(1)} kB)`);
