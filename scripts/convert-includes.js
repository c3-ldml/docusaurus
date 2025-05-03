const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert a filename to a valid component name
function toComponentName(filename) {
  // Remove the .md extension and convert to camelCase
  const name = filename.replace('.md', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  return name;
}

// Function to process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all include statements
  const includeRegex = /{!\s*([^}]+)\s*!}/g;
  const includes = [...content.matchAll(includeRegex)];
  
  if (includes.length > 0) {
    // Find the end of frontmatter
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd === -1) {
      console.log(`Warning: No frontmatter found in ${filePath}`);
      return;
    }

    // Generate import statements and component replacements
    const importStatements = [];
    let newContent = content;

    includes.forEach(match => {
      const includePath = match[1].trim();
      const componentName = toComponentName(path.basename(includePath));
      
      // Add import statement
      importStatements.push(`import ${componentName} from '@site/docs/${includePath}';`);
      
      // Replace include statement with component usage
      newContent = newContent.replace(match[0], `<${componentName} />`);
    });

    // Insert import statements after frontmatter
    newContent = newContent.slice(0, frontmatterEnd + 3) + '\n\n' + importStatements.join('\n') + '\n\n' + newContent.slice(frontmatterEnd + 3);
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Converted: ${filePath}`);
    }
  }
}

// Find all markdown files
const files = glob.sync('docs/**/*.md');

// Process each file
files.forEach(processFile);

console.log('Conversion complete!'); 