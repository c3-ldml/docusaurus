const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert old admonition format to new CollapsibleSection format
function convertAdmonitionToCollapsible(content) {
  // Add import statement if not present
  if (!content.includes('import CollapsibleSection')) {
    content = `import CollapsibleSection from '@site/src/components/CollapsibleSection';\n\n${content}`;
  }

  // First convert !!! tip admonitions
  content = content.replace(
    /!!!\s*tip\s*"([^"]+)"\s+([\s\S]*?)(?=\n(?:!!!|\?\?\?|\#)|$)/g,
    (match, title, content) => {
      // Split content into lines
      const lines = content.split('\n');
      let result = [];
      let inCodeBlock = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this line starts or ends a code block
        if (line.trim().startsWith('```')) {
          inCodeBlock = !inCodeBlock;
          // Always indent the code block markers
          result.push(`    ${line.trim()}`);
          continue;
        }
        
        if (inCodeBlock) {
          // Inside code block - indent all lines
          result.push(`    ${line}`);
        } else {
          // Outside code block - handle empty lines and regular content
          if (line.trim() === '') {
            result.push('');
          } else {
            result.push(`    ${line.replace(/^    /, '')}`);
          }
        }
      }
      
      // Clean up the result by removing extra blank lines at the start and end
      while (result[0] === '') result.shift();
      while (result[result.length - 1] === '') result.pop();
      
      return `<CollapsibleSection title="${title}">\n\n${result.join('\n')}\n\n</CollapsibleSection>\n\n`;
    }
  );

  // Then convert ??? info admonitions
  let hasChanges;
  do {
    hasChanges = false;
    content = content.replace(
      /\?\?\?\s*info\s*"([^"]+)"\s+([\s\S]*?)(?=\n(?:\?\?\?|\!!!|\#)|$)/g,
      (match, title, content) => {
        hasChanges = true;
        // Split content into lines
        const lines = content.split('\n');
        let result = [];
        let inCodeBlock = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if this line starts or ends a code block
          if (line.trim().startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            // Always indent the code block markers
            result.push(`    ${line.trim()}`);
            continue;
          }
          
          if (inCodeBlock) {
            // Inside code block - indent all lines
            result.push(`    ${line}`);
          } else {
            // Outside code block - handle empty lines and regular content
            if (line.trim() === '') {
              result.push('');
            } else {
              result.push(`    ${line.replace(/^    /, '')}`);
            }
          }
        }
        
        // Clean up the result by removing extra blank lines at the start and end
        while (result[0] === '') result.shift();
        while (result[result.length - 1] === '') result.pop();
        
        return `<CollapsibleSection title="${title}">\n\n${result.join('\n')}\n\n</CollapsibleSection>\n\n`;
      }
    );
  } while (hasChanges);

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