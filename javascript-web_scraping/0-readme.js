#!/usr/bin/node
/* 0-readme.js */

const fs = require('fs');

try {
  const data = (fs.readFileSync(process.argv[2], 'utf8'));
  console.log(data);
} catch (err) {
  console.log(err);
}
