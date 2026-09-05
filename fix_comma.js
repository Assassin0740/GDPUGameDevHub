const fs = require('fs');
const path = 'C:/Users/Administrator/Doubao/chats/2026-08-27/new-chat/data/2026-09-05.js';
let c = fs.readFileSync(path, 'utf8');
// Find the pattern: } followed by { id: "repo-unity-shadergraph and add comma
c = c.replace(/(\}\s*)(\s*\{\s*id:\s*"repo-unity-shadergraph-canvas-overlay")/, function(m, g1, g2) {
  return g1.trimEnd() + ',\n' + g2;
});
fs.writeFileSync(path, c, 'utf8');
console.log('fixed');
