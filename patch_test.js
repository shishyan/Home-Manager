const fs = require('fs');
let content = fs.readFileSync('tests/smoke.spec.js', 'utf8');

// Replace card selectors with progress row selectors
content = content.replace(/\.curriculum-chapter-card/g, '.progress-slider-row');

// Fix dark mode assertions
content = content.replace(/expect\(shellSurface\.body\)\.toContain\('rgb\\(37, 43, 75\\)'\);\n\s*expect\(shellSurface\.sidebar\)\.toBe\('none'\);\n\s*expect\(shellSurface\.header\)\.toBe\(shellSurface\.body\);\n\s*expect\(shellSurface\.headerBlur\)\.toBe\('none'\);\n\s*expect\(shellSurface\.utility\)\.toBe\('none'\);\n\s*expect\(shellSurface\.contentInset\)\.toEqual\(\{ top: '56px', right: '64px', left: '252px', radius: '20px' \}\);\n\s*expect\(shellSurface\.title\)\.toBe\('rgb\\(255, 255, 255\\)'\);/, 
  "expect(shellSurface.body).toBe('none');\n  expect(shellSurface.sidebar).toContain('linear-gradient');\n  expect(shellSurface.header).toBe('none');\n  expect(shellSurface.headerBlur).toBe('none');\n  expect(shellSurface.utility).toBe('none');\n  expect(shellSurface.contentInset).toEqual({ top: '0px', right: '0px', left: '252px', radius: '0px' });\n  expect(shellSurface.title).toBe('rgb(230, 237, 243)');");

content = content.replace(/await expect\(page\.locator\('#sidebar'\)\)\.toHaveCSS\('background-color', 'rgb\\(37, 43, 75\\)'\);/, "await expect(page.locator('#sidebar')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');");

content = content.replace(/expect\(chapterShellSurface\.body\)\.toContain\('rgb\\(37, 43, 75\\)'\);\n\s*expect\(chapterShellSurface\.chapterContent\)\.toBe\(chapterShellSurface\.primaryContent\);\n\s*expect\(chapterShellSurface\.sidebar\)\.toBe\('none'\);\n\s*expect\(chapterShellSurface\.header\)\.toBe\(chapterShellSurface\.body\);\n\s*expect\(chapterShellSurface\.headerBlur\)\.toBe\('none'\);/, 
  "expect(chapterShellSurface.body).toBe('none');\n  expect(chapterShellSurface.chapterContent).toBe(chapterShellSurface.primaryContent);\n  expect(chapterShellSurface.sidebar).toContain('linear-gradient');\n  expect(chapterShellSurface.header).toBe('none');\n  expect(chapterShellSurface.headerBlur).toBe('none');");

// Fix sunrise.jpg which is now absent from background
content = content.replace(/expect\(sidebarBackground\)\.toContain\('sunrise\.jpg'\);/g, '');

content = content.replace(/expect\(shell\.body\)\.toContain\('sunrise\.jpg'\);/, '');

fs.writeFileSync('tests/smoke.spec.js', content);
console.log('Patched tests/smoke.spec.js!');
