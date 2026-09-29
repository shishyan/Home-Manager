const fs = require('fs');
const badFoundations = fs.readFileSync('v1_0_29_foundations.js', 'utf8');
const cleanFoundations = fs.readFileSync('js/chapter-foundations-grade7.js', 'utf8');

const englishFoundations = badFoundations.substring(badFoundations.indexOf('add(\'g7-english\', \'English\', \'Learning Together\''), badFoundations.indexOf('const hindi = ['));

const newFoundations = cleanFoundations.replace('const hindi = [', englishFoundations + '\n  const hindi = [');
fs.writeFileSync('js/chapter-foundations-grade7.js', newFoundations);

const badSummaries = fs.readFileSync('v1_0_29_summaries.js', 'utf8');
const cleanSummaries = fs.readFileSync('js/chapter-summaries-grade7-languages.js', 'utf8');

const englishSummaries = badSummaries.substring(badSummaries.indexOf('  HM.chapterSummaries.add(\'g7-english\', ['), badSummaries.indexOf('  HM.chapterSummaries.add(\'g7-hindi\', ['));

const newSummaries = cleanSummaries.replace(/  HM\.chapterSummaries\.add\('g7-english', \[[\s\S]*?\]\);\n/, englishSummaries);
fs.writeFileSync('js/chapter-summaries-grade7-languages.js', newSummaries);
console.log('Restored English chapters to clean files!');
