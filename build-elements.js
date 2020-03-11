const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/repro/runtime-es2015.js',
    './dist/repro/polyfills-es2015.js',
    './dist/repro/main-es2015.js',
  ];
  await fs.ensureDir('dist');
  await concat(files, 'test/elements.js');
})();
