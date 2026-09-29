const fs = require('fs');

// i18n
let i27 = require('child_process').execSync('git show 958098b863f47675ad82c0a4f28e6d3741d1ae5d^:js/i18n.js').toString('utf8');
let i28 = fs.readFileSync('js/i18n.js', 'utf8');
// The keys are the same, just the values are corrupted.
// We can extract the Tamil block from v1.0.27 and replace the corrupted one in v1.0.28.
let t27 = i27.match(/ta: \{[\s\S]*?\n  \},/)[0];
i28 = i28.replace(/ta: \{[\s\S]*?\n  \},/, t27);
fs.writeFileSync('js/i18n.js', i28);
console.log('Fixed js/i18n.js');

// views
let v27 = require('child_process').execSync('git show 958098b863f47675ad82c0a4f28e6d3741d1ae5d^:js/views.js').toString('utf8');
let v28 = fs.readFileSync('js/views.js', 'utf8');

// For views, the corrupted text is mostly in icons, labels, etc., but wait! 
// Did views.js contain ANY tamil? Let's check!
