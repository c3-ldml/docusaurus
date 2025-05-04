const fs = require('fs');
const path = require('path');

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

// Function to check if file has tabs
function hasTabs(content) {
  return /^=== ".*"$/m.test(content);
}

// Function to check if line is indented
function isIndented(line) {
  return /^\s+/.test(line);
}

// Function to convert tabs
function convertTabs(content) {
  // Split content into lines
  const lines = content.split('\n');
  let inTab = false;
  let currentTabTitle = '';
  let currentTabContent = [];
  let tabs = [];
  let newContent = [];
  let frontmatterEnd = -1;
  let importsAdded = false;
  let frontmatterCount = 0;

  // First pass: find frontmatter end (second ---)
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '---') {
      frontmatterCount++;
      if (frontmatterCount === 2) {
        frontmatterEnd = i;
        break;
      }
    }
  }

  // Process content line by line
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Add imports after frontmatter if we haven't already
    if (i === frontmatterEnd + 1 && !importsAdded) {
      newContent.push(line);
      newContent.push('');
      newContent.push('import Tabs from \'@theme/Tabs\';');
      newContent.push('import TabItem from \'@theme/TabItem\';');
      newContent.push('');
      importsAdded = true;
      continue;
    }
    
    if (line.match(/^=== "(.+)"$/)) {
      if (inTab) {
        // Save previous tab
        tabs.push({
          title: currentTabTitle,
          content: currentTabContent.join('\n')
        });
      }
      inTab = true;
      currentTabTitle = line.match(/^=== "(.+)"$/)[1];
      currentTabContent = [];
    } else if (inTab) {
      if (isIndented(line)) {
        // Only include indented content
        currentTabContent.push(line);
      } else if (line.trim() === '') {
        // Include empty lines within tab content
        currentTabContent.push(line);
      } else {
        // Non-indented content ends the current tab
        if (currentTabContent.length > 0) {
          tabs.push({
            title: currentTabTitle,
            content: currentTabContent.join('\n')
          });
        }
        inTab = false;
        newContent.push(line);
      }
    } else {
      newContent.push(line);
    }
  }

  // Add the last tab if exists
  if (inTab && currentTabContent.length > 0) {
    tabs.push({
      title: currentTabTitle,
      content: currentTabContent.join('\n')
    });
  }

  // If we found tabs, convert them to MDX format
  if (tabs.length > 0) {
    // Find the position of the first tab in the original content
    const firstTabIndex = lines.findIndex(line => line.match(/^=== "(.+)"$/));
    
    // Rebuild content with tabs in their original position
    const finalContent = [];
    
    // Add content up to the first tab
    for (let i = 0; i < firstTabIndex; i++) {
      finalContent.push(newContent[i]);
    }
    
    // Add Tabs component
    finalContent.push('<Tabs>');
    
    // Add each tab
    tabs.forEach((tab, index) => {
      finalContent.push(`  <TabItem value="tab${index + 1}" label="${tab.title}"${index === 0 ? ' default' : ''}>`);
      finalContent.push(tab.content);
      finalContent.push('  </TabItem>');
    });
    
    // Close Tabs component
    finalContent.push('</Tabs>');
    
    // Add remaining content
    for (let i = firstTabIndex; i < newContent.length; i++) {
      if (!newContent[i].match(/^=== "(.+)"$/)) {
        finalContent.push(newContent[i]);
      }
    }
    
    return finalContent.join('\n');
  }

  return content;
}

// Main function to process files
function processFiles() {
  const docsDir = path.join(process.cwd(), 'docs');
  const files = findMarkdownFiles(docsDir);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    if (hasTabs(content)) {
      const newContent = convertTabs(content);
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Converted tabs in: ${file}`);
    }
  }
}

// Run the script
processFiles();
console.log('Tab conversion complete!'); 