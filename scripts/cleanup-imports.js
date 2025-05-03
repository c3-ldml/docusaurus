const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file contains the CollapsibleSection import
  const importRegex = /import CollapsibleSection from '@site\/src\/components\/CollapsibleSection';/;
  if (importRegex.test(content)) {
    // Check if the component is used
    const componentUsageRegex = /<CollapsibleSection|<CollapsibleSection\s|CollapsibleSection\./;
    if (!componentUsageRegex.test(content)) {
      // Remove the import statement
      content = content.replace(importRegex, '');
      // Clean up any extra newlines
      content = content.replace(/\n\n\n+/g, '\n\n');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up: ${filePath}`);
  }
}

// Find all markdown files
const files = glob.sync('docs/**/*.md');

// Process each file
files.forEach(processFile);

console.log('Cleanup complete!'); 