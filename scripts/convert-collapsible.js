const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert old admonition format to new CollapsibleSection format
function convertAdmonitionToCollapsible(content) {
  // Add import statement if not present
  if (!content.includes('import CollapsibleSection')) {
    content = `import CollapsibleSection from '@site/src/components/CollapsibleSection';\n\n${content}`;
  }

  // Convert ??? info to CollapsibleSection
  content = content.replace(
    /\?\?\? info "([^"]+)"\n\n([\s\S]*?)(?=\n\?\?\?|\n#|$)/g,
    (match, title, content) => {
      // Remove extra indentation from content
      const cleanedContent = content.replace(/^    /gm, '');
      return `<CollapsibleSection title="${title}">\n\n${cleanedContent}\n\n</CollapsibleSection>\n\n`;
    }
  );

  return content;
}

// Function to process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = convertAdmonitionToCollapsible(content);
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Converted: ${filePath}`);
  }
}

// Find all markdown files
const files = glob.sync('docs/**/*.md');

// Process each file
files.forEach(processFile);

console.log('Conversion complete!'); 