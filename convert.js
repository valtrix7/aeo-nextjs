const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  return html
    .replace(/class="/g, 'className="')
    .replace(/stroke-width="/g, 'strokeWidth="')
    .replace(/stroke-linecap="/g, 'strokeLinecap="')
    .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
    .replace(/fill-rule="/g, 'fillRule="')
    .replace(/clip-rule="/g, 'clipRule="')
    .replace(/<!--(.*?)-->/gs, '')
    .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
    .replace(/<br([^>]*[^\/])?>/g, '<br />')
    .replace(/<hr([^>]*[^\/])?>/g, '<hr />');
}

function processFile(filename, outputPath) {
  const content = fs.readFileSync(path.join('_temp_html', filename), 'utf-8');
  // extract <main>
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) return;
  
  let mainContent = mainMatch[1];
  let jsx = htmlToJsx(mainContent);
  
  if (filename === 'index.html') {
    jsx = jsx.replace(/<button className="copy-btn"[^>]*>Copy<\/button>/g, '<button className="copy-btn" onClick={(e) => { const tgt = e.target.previousSibling; navigator.clipboard.writeText(tgt.textContent); e.target.textContent = "Copied"; setTimeout(()=>e.target.textContent="Copy", 1400); }}>Copy</button>');
  }

  // Convert href="about.html" to href="/about"
  // Keep <a> as <a>, Next.js <Link> requires import, but standard <a> works fine for SSG/MPA in Next.js.
  // Actually, let's just use <Link> by replacing <a href="xxx.html"> with <Link href="/xxx"> 
  // We'll replace it carefully.
  
  const isIndex = filename === 'index.html';
  
  let fileOutput = `
${isIndex ? "'use client';" : ""}
import Link from 'next/link';

export default function Page() {
  return (
    <main id="top" className="wrap" data-od-id="main">
      ${jsx}
    </main>
  );
}
`;

  // Fix local links
  fileOutput = fileOutput.replace(/href="([a-zA-Z0-9_-]+)\.html"/g, 'href="/$1"');
  // We can just leave them as <a> tags! Next.js 13+ App Router works fine with standard <a> tags or we can upgrade them later. 
  // Wait, Next.js compiler will prefer <Link>. 
  // Let's replace <a with <Link for relative links.
  fileOutput = fileOutput.replace(/<a ([^>]*)href="\/([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, '<Link $1href="/$2"$3>$4</Link>');
  // Also handle index.html which becomes /
  fileOutput = fileOutput.replace(/href="index.html"/g, 'href="/"');
  fileOutput = fileOutput.replace(/<a ([^>]*)href="\/"([^>]*)>([\s\S]*?)<\/a>/g, '<Link $1href="/"$3>$4</Link>');

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, fileOutput, 'utf-8');
}

processFile('index.html', 'src/app/page.tsx');
processFile('features.html', 'src/app/features/page.tsx');
processFile('install.html', 'src/app/install/page.tsx');
processFile('reports.html', 'src/app/reports/page.tsx');
processFile('blog.html', 'src/app/blog/page.tsx');
processFile('about.html', 'src/app/about/page.tsx');
console.log('Conversion done');
