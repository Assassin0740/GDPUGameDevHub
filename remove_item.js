const fs = require('fs');
const path = 'C:/Users/Administrator/Doubao/chats/2026-08-27/new-chat/data/2026-09-06.js';
let c = fs.readFileSync(path, 'utf8');
// Remove the unity-programming-best-practices item (from its id line to the closing brace before next item or end)
const startMarker = '    {\n      id: "unity-programming-best-practices"';
const startIdx = c.indexOf(startMarker);
if (startIdx === -1) { console.log('not found'); process.exit(1); }
// Find the end: next "    {\n      id:" after start, or "  ]\n};"
const nextItemIdx = c.indexOf('    {\n      id:', startIdx + 10);
const endArrayIdx = c.indexOf('\n  ]\n};', startIdx);
let endIdx;
if (nextItemIdx !== -1 && nextItemIdx < endArrayIdx) {
  endIdx = nextItemIdx;
} else {
  endIdx = endArrayIdx + 1;
}
// Also remove trailing comma from previous item if this was not last
const before = c.substring(0, startIdx);
const after = c.substring(endIdx);
// If previous item ends with "    }" and after starts with "    {", need comma
// If after starts with "  ]", previous item should not have trailing comma
let result;
if (after.trimStart().startsWith('{')) {
  // next item exists, ensure previous has comma
  result = before.replace(/\},\s*$/, '},\n') + after;
} else {
  // this was last item, remove trailing comma from previous
  result = before.replace(/,\s*$/, '\n') + after;
}
fs.writeFileSync(path, result, 'utf8');
console.log('removed 1 item, new length check:');
global.window = {};
eval(fs.readFileSync(path, 'utf8'));
console.log('items:', window.DAILY_NEWS_DATA.items.length);
