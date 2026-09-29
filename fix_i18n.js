const fs = require('fs');

let i27 = require('child_process').execSync('git show 958098b863f47675ad82c0a4f28e6d3741d1ae5d^:js/i18n.js').toString('utf8');
let i28 = fs.readFileSync('js/i18n.js', 'utf8');

let t27 = i27.match(/const ta = \{[\s\S]*?\n  \};/)[0];
let h27 = i27.match(/const hi = \{[\s\S]*?\n  \};/)[0];
let ml27 = i27.match(/const ml = \{[\s\S]*?\n  \};/)[0];
let te27 = i27.match(/const te = \{[\s\S]*?\n  \};/)[0];
let kn27 = i27.match(/const kn = \{[\s\S]*?\n  \};/)[0];

i28 = i28.replace(/const ta = \{[\s\S]*?\n  \};/, t27);
i28 = i28.replace(/const hi = \{[\s\S]*?\n  \};/, h27);
i28 = i28.replace(/const ml = \{[\s\S]*?\n  \};/, ml27);
i28 = i28.replace(/const te = \{[\s\S]*?\n  \};/, te27);
i28 = i28.replace(/const kn = \{[\s\S]*?\n  \};/, kn27);

fs.writeFileSync('js/i18n.js', i28);
console.log('Fixed js/i18n.js');
