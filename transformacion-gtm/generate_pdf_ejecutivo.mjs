import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'deck_ejecutivo.html');
const pdfPath = path.join(__dirname, 'Deck_Ejecutivo_Transformacion.pdf');

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

const slideCount = await page.evaluate(() => document.querySelectorAll('.slide').length);
console.log(`Found ${slideCount} slides`);

const screenshots = [];
for (let i = 0; i < slideCount; i++) {
  const clip = await page.evaluate((idx) => {
    const slide = document.querySelectorAll('.slide')[idx];
    const rect = slide.getBoundingClientRect();
    return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
  }, i);
  const screenshotPath = path.join(__dirname, `_eslide_${i}.png`);
  await page.screenshot({ path: screenshotPath, clip });
  screenshots.push(screenshotPath);
  console.log(`Captured slide ${i + 1}/${slideCount}`);
}

const imagesHtml = screenshots.map((s) => {
  const base64 = fs.readFileSync(s).toString('base64');
  return `<div style="width:1280px;height:720px;page-break-after:always;break-after:page;margin:0;padding:0;"><img src="data:image/png;base64,${base64}" style="width:1280px;height:720px;display:block;" /></div>`;
}).join('');

const pdfHtml = `<!DOCTYPE html><html><head><style>@page{size:1280px 720px;margin:0;}*{margin:0;padding:0;}body{margin:0;}</style></head><body>${imagesHtml}</body></html>`;

const pdfPage = await browser.newPage();
await pdfPage.setContent(pdfHtml, { waitUntil: 'networkidle0' });
await pdfPage.pdf({
  path: pdfPath,
  width: '1280px',
  height: '720px',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});

screenshots.forEach(s => fs.unlinkSync(s));
await browser.close();
console.log(`PDF generated: ${pdfPath}`);
