const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert old admonition format to new CollapsibleSection format
function convertAdmonitionToCollapsible(content) {
  let hasAdmonitions = false;
  let hasImport = content.includes('import CollapsibleSection');

  // Convert admonitions with titles
  content = content.replace(
    /(?:!!!|\?\?\?)\+?\s*(\w+)\s*"([^"]+)"\n\n([\s\S]*?)(?=\n(?:!!!|\?\?\?|\#|\<|\[|\-|\n\s*\n)|$)/g,
    (match, type, title, content) => {
      hasAdmonitions = true;
      // Split content into lines
      const lines = content.split('\n');
      let result = [];
      let inCodeBlock = false;
      let currentIndent = 4; // Start with 4 spaces indentation
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineIndent = line.search(/\S/); // Find first non-whitespace character
        
        // If line is less indented than our current level and not empty, stop processing
        if (lineIndent < currentIndent && line.trim() !== '') {
          break;
        }
        
        // Check if this line starts or ends a code block
        if (line.trim().startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          // Always indent the code block markers
          result.push(`  ${line.trim()}`);
          continue;
        }
        
        if (inCodeBlock) {
          // Inside code block - indent all lines
          result.push(`  ${line}`);
        } else {
          // Outside code block - handle empty lines and regular content
          if (line.trim() === '') {
            result.push('');
          } else {
            result.push(`  ${line.replace(/^    /, '')}`);
          }
        }
      }
      
      // Clean up the result by removing extra blank lines at the start and end
      while (result[0] === '') result.shift();
      while (result[result.length - 1] === '') result.pop();
      
      return `<CollapsibleSection title="${title}">\n\n${result.join('\n')}\n\n</CollapsibleSection>\n\n`;
    }
  );

  // Convert admonitions without titles
  content = content.replace(
    /(?:!!!|\?\?\?)\+?\s*(\w+)\n\n([\s\S]*?)(?=\n(?:!!!|\?\?\?|\#|\<|\[|\-|\n\s*\n)|$)/g,
    (match, type, content) => {
      hasAdmonitions = true;
      // Split content into lines
      const lines = content.split('\n');
      let result = [];
      let inCodeBlock = false;
      let currentIndent = 4; // Start with 4 spaces indentation
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineIndent = line.search(/\S/); // Find first non-whitespace character
        
        // If line is less indented than our current level and not empty, stop processing
        if (lineIndent < currentIndent && line.trim() !== '') {
          break;
        }
        
        // Check if this line starts or ends a code block
        if (line.trim().startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          // Always indent the code block markers
          result.push(`  ${line.trim()}`);
          continue;
        }
        
        if (inCodeBlock) {
          // Inside code block - indent all lines
          result.push(`  ${line}`);
        } else {
          // Outside code block - handle empty lines and regular content
          if (line.trim() === '') {
            result.push('');
          } else {
            result.push(`  ${line.replace(/^    /, '')}`);
          }
        }
      }
      
      // Clean up the result by removing extra blank lines at the start and end
      while (result[0] === '') result.shift();
      while (result[result.length - 1] === '') result.pop();
      
      return `<CollapsibleSection>\n\n${result.join('\n')}\n\n</CollapsibleSection>\n\n`;
    }
  );

  // Add import statement if we found admonitions and it's not already there
  if (hasAdmonitions && !hasImport) {
    // Find the end of frontmatter (---)
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      // Insert import after frontmatter
      content = content.slice(0, frontmatterEnd + 3) + '\n\nimport CollapsibleSection from \'@site/src/components/CollapsibleSection\';\n\n' + content.slice(frontmatterEnd + 3);
    } else {
      // If no frontmatter, add at the beginning
      content = `import CollapsibleSection from '@site/src/components/CollapsibleSection';\n\n${content}`;
    }
  }

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