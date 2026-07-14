const fs = require('fs');

function fix(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/style="width: (\d+)%;"/g, (match, p1) => {
    return `style={{width: "${p1}%"}}`;
  });
  fs.writeFileSync(file, content);
}
fix('src/app/reports/page.tsx');
console.log('Fixed width styles');
