const puppeteer = require("puppeteer");

const pageConfigs = {
  waitUntil: "networkidle2",
};

const options = (fileName) => ({
  format: "a4",
  printBackground: true,
  pageRanges: "1-1",
  path: `public/resumes/${fileName}.pdf`,
});

const generate = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/es?printmode=true", pageConfigs);
  await page.pdf(options("es_resume"));

  await page.goto("http://localhost:3000/en?printmode=true", pageConfigs);
  await page.pdf(options("en_resume"));

  await browser.close();
};

generate().catch(err => {
  console.error("Error generating PDFs:", err);
  process.exit(1);
});
