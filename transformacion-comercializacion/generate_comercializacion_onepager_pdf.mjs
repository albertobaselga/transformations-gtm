import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, 'One_Pager_Transformacion_Comercializacion.html');
const pdfPath = join(__dirname, 'One_Pager_Transformacion_Comercializacion.pdf');
const pngPath = join(__dirname, 'One_Pager_Transformacion_Comercializacion.png');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();

await page.setViewport({ width: 1600, height: 2000, deviceScaleFactor: 2 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 60000 });

await page.evaluateHandle('document.fonts.ready');
await new Promise((r) => setTimeout(r, 1500));

await page.screenshot({ path: pngPath, fullPage: true, type: 'png' });

await page.pdf({
  path: pdfPath,
  width: '1600px',
  height: '2100px',
  printBackground: true,
  preferCSSPageSize: false,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`PDF: ${pdfPath}`);
console.log(`PNG: ${pngPath}`);
