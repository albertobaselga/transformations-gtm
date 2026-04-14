import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const diagrams = [
  {
    html: 'flow_diagram_comercializacion_fases.html',
    png: 'flow_diagram_comercializacion_fases.png',
    viewport: { width: 1800, height: 820 },
  },
  {
    html: 'flow_diagram_comercializacion_tiempos.html',
    png: 'flow_diagram_comercializacion_tiempos.png',
    viewport: { width: 1820, height: 680 },
  },
  {
    html: 'flow_diagram_comercializacion_funnel.html',
    png: 'flow_diagram_comercializacion_funnel.png',
    viewport: { width: 2200, height: 1000 },
  },
  {
    html: 'flow_diagram_comercializacion_autonomia.html',
    png: 'flow_diagram_comercializacion_autonomia.png',
    viewport: { width: 1800, height: 800 },
  },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

for (const diagram of diagrams) {
  const page = await browser.newPage();
  await page.setViewport(diagram.viewport);
  await page.goto(`file://${join(__dirname, diagram.html)}`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  await page.waitForSelector('#diagram svg', { timeout: 15000 }).catch(() => {});
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const diagramBox = await page.evaluate(() => {
    const svg = document.querySelector('#diagram svg') || document.querySelector('.mermaid svg');
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
  });

  const pngPath = join(__dirname, diagram.png);

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
  } else {
    await page.screenshot({ path: pngPath, fullPage: true });
  }

  console.log(`Generated: ${pngPath}`);
  await page.close();
}

await browser.close();
