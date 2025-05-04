const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all markdown files recursively
function findMarkdownFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(findMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Function to convert badge syntax
function convertBadge(match, altText, badgeUrl, linkUrl) {
  // Remove .svg extension and replace spaces with underscores
  const cleanUrl = badgeUrl.replace('.svg', '').replace(/ /g, '_');
  return `<a href={${JSON.stringify(linkUrl)}}><img src={${JSON.stringify(cleanUrl)}} alt={${JSON.stringify(altText)}} /></a>`;
}

// Main function to process files
function processFiles() {
  const docsDir = path.join(process.cwd(), 'docs');
  const files = findMarkdownFiles(docsDir);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Regular expression to match both updated and added badges
    const badgeRegex = /\[!\[(Version badge)\]\((https:\/\/img\.shields\.io\/badge\/(Updated|Added) in-v\d+\.\d+-blue\.svg)\)\]\((\.\.\/)*release-notes\/\d+\.\d+\.md\)/g;
    
    const newContent = content.replace(badgeRegex, convertBadge);
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Updated badges in: ${file}`);
    }
  }
}

// Run the script
processFiles();
console.log('Badge conversion complete!'); 