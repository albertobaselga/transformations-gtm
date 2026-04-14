import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'flow_diagram.html');
const pngPath = join(__dirname, 'flow_diagram.png');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

await page.setViewport({ width: 1800, height: 800 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for Mermaid to render
await page.waitForSelector('svg.mermaid', { timeout: 15000 }).catch(() => {
  // Mermaid v11 uses different selector
});
await new Promise(r => setTimeout(r, 3000));

// Get the diagram bounding box
const diagramBox = await page.evaluate(() => {
  const svg = document.querySelector('#diagram svg') || document.querySelector('.mermaid svg');
  if (!svg) return null;
  const rect = svg.getBoundingClientRect();
  return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
});

if (diagramBox) {
  await page.screenshot({
    path: pngPath,
    clip: {
      x: Math.max(0, diagramBox.x - 16),
      y: Math.max(0, diagramBox.y - 16),
      width: diagramBox.width + 32,
      height: diagramBox.height + 32,
    },
  });
  console.log(`Flow diagram PNG generated: ${pngPath} (${Math.round(diagramBox.width)}x${Math.round(diagramBox.height)})`);
} else {
  // Fallback: screenshot whole page
  await page.screenshot({ path: pngPath, fullPage: true });
  console.log(`Flow diagram PNG generated (fullpage fallback): ${pngPath}`);
}

await browser.close();
