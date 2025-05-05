const fs = require('fs');
const path = require('path');

function convertFigures(content) {
  // Match figure elements with optional img and figcaption
  const figureRegex = /<figure>\s*<img\s+([^>]*)\/>\s*(?:<figcaption>([^<]*)<\/figcaption>)?\s*<\/figure>/g;
  
  return content.replace(figureRegex, (match, imgAttrs, figcaption) => {
    // Extract src from img attributes
    const srcMatch = imgAttrs.match(/src="([^"]+)"/);
    if (!srcMatch) return match;
    
    const src = srcMatch[1];
    // Extract alt text if present
    const altMatch = imgAttrs.match(/alt="([^"]+)"/);
    const alt = altMatch ? `alt="${altMatch[1]}"` : '';
    // Extract width if present
    const widthMatch = imgAttrs.match(/width="([^"]+)"/);
    const width = widthMatch ? `width="${widthMatch[1]}"` : '';
    
    // Create the require statement
    const requireStatement = `require('${src}').default`;
    
    // Build the new img element with center alignment
    let newImg = `<img src={${requireStatement}}`;
    if (alt) newImg += ` ${alt}`;
    if (width) newImg += ` ${width}`;
    newImg += ' style={{ display: "block", margin: "0 auto" }} />';
    
    return newImg;
  });
}

// Function to recursively get all MDX and MD files
function getAllMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  let markdownFiles = [];

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      markdownFiles = markdownFiles.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      markdownFiles.push(filePath);
    }
  });

  return markdownFiles;
}

// Process all MDX and MD files recursively
const docsDir = 'docs';
const files = getAllMarkdownFiles(docsDir);
const changedFiles = [];

console.log(`Found ${files.length} files to process`);

files.forEach(filePath => {
  console.log(`\nProcessing ${filePath}...`);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const converted = convertFigures(content);
  
  if (content !== converted) {
    console.log(`Changes made to ${filePath}`);
    fs.writeFileSync(filePath, converted);
    changedFiles.push(filePath);
  } else {
    console.log(`No changes needed for ${filePath}`);
  }
});

console.log('\nConversion complete!');
console.log('\nChanged files:');
changedFiles.forEach(file => console.log(`- ${file}`));
console.log(`\nTotal files changed: ${changedFiles.length}`); 