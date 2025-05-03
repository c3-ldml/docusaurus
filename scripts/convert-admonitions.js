const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert MkDocs admonitions to Docusaurus format
function convertAdmonitions(content) {
  // Convert admonitions with titles (both !!! and ???)
  content = content.replace(
    /(?:!!!|\?\?\?)\+?\s*(\w+)\s*"([^"]+)"\s+([\s\S]*?)(?=\n(?:!!!|\?\?\?|\#|\<|\[|\-|\n\s*\n)|$)/g,
    (match, type, title, content) => {
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
      
      return `:::${type.toLowerCase()}[${title}]\n\n${result.join('\n')}\n\n:::\n\n`;
    }
  );

  // Convert admonitions without titles (both !!! and ???)
  content = content.replace(
    /(?:!!!|\?\?\?)\+?\s*(\w+)\s+([\s\S]*?)(?=\n(?:!!!|\?\?\?|\#|\<|\[|\-|\n\s*\n)|$)/g,
    (match, type, content) => {
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
      
      return `:::${type.toLowerCase()}\n\n${result.join('\n')}\n\n:::\n\n`;
    }
  );

  return content;
}

// Function to process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = convertAdmonitions(content);
  
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