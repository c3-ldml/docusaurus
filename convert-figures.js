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
    
    // Build the new img element
    let newImg = `<img src={${requireStatement}}`;
    if (alt) newImg += ` ${alt}`;
    if (width) newImg += ` ${width}`;
    newImg += ' />';
    
    return newImg;
  });
}

// Example usage:
// const content = fs.readFileSync('your-file.md', 'utf8');
// const converted = convertFigures(content);
// fs.writeFileSync('your-file.md', converted); 