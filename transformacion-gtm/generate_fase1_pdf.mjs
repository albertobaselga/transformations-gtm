import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'One_Pager_Fase1.html');
const pngPath = join(__dirname, 'One_Pager_Fase1.png');
const pdfPath = join(__dirname, 'One_Pager_Fase1.pdf');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

await page.setViewport({ width: 1120, height: 1584 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

await page.evaluateHandle('document.fonts.ready');
await new Promise(r => setTimeout(r, 1000));

// Screenshot for pixel-perfect output
await page.screenshot({
  path: pngPath,
  fullPage: true,
  type: 'png',
});

// PDF
await page.pdf({
  path: pdfPath,
  width: '1120px',
  height: '1584px',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PNG generated: ${pngPath}`);
console.log(`PDF generated: ${pdfPath}`);
