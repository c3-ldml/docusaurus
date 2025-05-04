const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert a filename to a valid component name
function toComponentName(filename) {
  // Remove .md extension and convert to camelCase
  let name = filename.replace(/\.md$/, '');
  
  // Handle numbers at the start
  if (/^8x8/.test(name)) {
    name = 'EightByEight' + name.slice(3);
  } else if (/^\d/.test(name)) {
    name = 'component' + name;
  }
  
  // Convert to camelCase
  name = name.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  
  return name;
}

// Function to process a single file
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Find all include statements
  const includeRegex = /{!\s*([^}]+)\s*!}/g;
  let match;
  let newContent = content;

  while ((match = includeRegex.exec(content)) !== null) {
    const includePath = match[1].trim();
    const basename = path.basename(includePath);
    const componentName = toComponentName(basename);
    
    // Generate import statement - preserve the path but ensure underscore prefix
    const importPath = includePath.replace(basename, '_' + basename);
    const importStatement = `import ${componentName} from '@site/docs/${importPath}';`;
    
    // Generate component usage
    const componentUsage = `<${componentName} />`;
    
    // Replace include statement with component usage
    newContent = newContent.replace(match[0], componentUsage);
    
    // Add import statement after frontmatter if not already present
    if (!newContent.includes(importStatement)) {
      const frontmatterEnd = newContent.indexOf('---', 3);
      if (frontmatterEnd !== -1) {
        newContent = newContent.slice(0, frontmatterEnd + 3) + '\n' + importStatement + '\n' + newContent.slice(frontmatterEnd + 3);
      } else {
        newContent = importStatement + '\n' + newContent;
      }
    }
    
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Converted: ${filePath}`);
  }
}

// Find all markdown files
const files = glob.sync('docs/**/*.md');

// Process each file
files.forEach(processFile);

console.log('Conversion complete!'); 