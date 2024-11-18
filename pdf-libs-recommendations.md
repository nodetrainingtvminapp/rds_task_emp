# 📄 Methods to Create PDFs in Node.js (2024 Recommendations)
---

## **📜 1. `pdfkit`**
- **Description**: Programmatically generates PDFs with precise control over layout, fonts, images, and vector graphics.
- **Best For**: Dynamic content creation, invoices, reports.
- **⭐ Pros**:
  - Full programmatic control.
  - Lightweight and fast.
- **🚫 Cons**:
  - Requires manual layout management.
- **Installation**:
  ```bash
  npm install pdfkit
  ```
- **Example**:
  ```javascript
  const PDFDocument = require('pdfkit');
  const fs = require('fs');

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output.pdf'));
  doc.text('Hello, PDFKit!');
  doc.end();
  ```

---

## **🌐 2. `puppeteer`**
- **Description**: A headless Chrome browser for rendering modern HTML/CSS and generating accurate PDFs.
- **Best For**: HTML/CSS-to-PDF with high fidelity (e.g., tickets, certificates).
- **⭐ Pros**:
  - Full CSS3/HTML5 support.
  - High rendering accuracy.
- **🚫 Cons**:
  - Heavy library (~100 MB).
- **Installation**:
  ```bash
  npm install puppeteer
  ```
- **Example**:
  ```javascript
  const puppeteer = require('puppeteer');

  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent('<h1>Hello, Puppeteer!</h1>');
    await page.pdf({ path: 'output.pdf', format: 'A4' });
    await browser.close();
  })();
  ```

---

## **🖋️ 3. `pdf-lib`**
- **Description**: A modern library for creating and modifying PDFs programmatically in pure JavaScript.
- **Best For**: Editing, merging, or filling existing PDFs.
- **⭐ Pros**:
  - Lightweight and dependency-free.
  - Works in both browser and Node.js.
- **🚫 Cons**:
  - No built-in HTML rendering.
- **Installation**:
  ```bash
  npm install pdf-lib
  ```
- **Example**:
  ```javascript
  const { PDFDocument, StandardFonts } = require('pdf-lib');
  const fs = require('fs');

  (async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    page.drawText('Hello, PDF-Lib!', { font, fontSize: 30, x: 50, y: 350 });
    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync('output.pdf', pdfBytes);
  })();
  ```

---

## **📜 4. `html-pdf`**
- **Description**: Converts HTML content into PDFs using the PhantomJS engine.
- **Best For**: Simple HTML-to-PDF generation with minimal setup.
- **⭐ Pros**:
  - Easy to set up and use.
  - Lightweight compared to Puppeteer.
- **🚫 Cons**:
  - Limited support for modern CSS/JavaScript.
  - Dependent on PhantomJS (no longer actively developed).
- **Installation**:
  ```bash
  npm install html-pdf
  ```
- **Example**:
  ```javascript
  const pdf = require('html-pdf');
  const html = '<h1>Hello, HTML-PDF!</h1>';
  pdf.create(html).toFile('output.pdf', (err, res) => {
    if (err) return console.error(err);
    console.log(res);
  });
  ```

---

## **📄 5. `pdf-creator-node`**
- **Description**: A library to generate PDFs from HTML templates (e.g., EJS, Handlebars).
- **Best For**: Template-driven PDFs like invoices and reports.
- **⭐ Pros**:
  - Works with popular template engines.
  - Easy to integrate into server-side apps.
- **🚫 Cons**:
  - Requires predefined templates.
- **Installation**:
  ```bash
  npm install pdf-creator-node
  ```
- **Example**:
  ```javascript
  const pdf = require('pdf-creator-node');
  const fs = require('fs');

  const template = fs.readFileSync('template.html', 'utf8');
  const options = { format: 'A4', orientation: 'portrait' };
  const document = { html: template, data: { title: 'Hello' }, path: './output.pdf' };

  pdf.create(document, options).then(() => console.log('PDF created!'));
  ```

---

## **🌟 6. `node-html-to-pdf`**
- **Description**: A simple tool for converting HTML to PDF using Puppeteer.
- **Best For**: Quick HTML-to-PDF conversion with minimal setup.
- **⭐ Pros**:
  - Lightweight wrapper around Puppeteer.
  - Simple and fast.
- **🚫 Cons**:
  - Limited advanced options compared to Puppeteer.
- **Installation**:
  ```bash
  npm install node-html-to-pdf
  ```
- **Example**:
  ```javascript
  const { generatePdf } = require('node-html-to-pdf');
  generatePdf({ content: '<h1>Hello, Node-HTML-to-PDF!</h1>' }, 'output.pdf');
  ```

---

## **📊 Comparison Table**

| Library             | Purpose                   | Pros                                    | Cons                               |
|----------------------|---------------------------|-----------------------------------------|------------------------------------|
| **`pdfkit`**         | Programmatic PDFs         | Full control, lightweight               | Manual layout management required |
| **`puppeteer`**      | HTML/CSS to PDF           | Accurate rendering, CSS3/HTML5 support  | Heavy library (~100 MB)           |
| **`pdf-lib`**        | PDF creation/modification | Pure JS, works in browser & Node.js     | No HTML rendering                 |
| **`html-pdf`**       | HTML to PDF               | Easy setup, lightweight                 | Limited CSS/JS support            |
| **`pdf-creator-node`** | Template-driven PDFs    | EJS/Handlebars integration              | Templates required                |
| **`node-html-to-pdf`** | HTML to PDF             | Lightweight, fast                      | Basic compared to full Puppeteer  |

---

### **Recommendations**
- **Programmatic PDFs**: Use `pdfkit` or `pdf-lib`.
- **HTML to PDF Conversion**: Use `puppeteer`, `html-pdf`, or `node-html-to-pdf`.
- **Template-Driven PDFs**: Use `pdf-creator-node`.

These libraries are well-suited for modern PDF generation requirements in Node.js applications. 🚀
