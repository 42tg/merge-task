#!/usr/bin/env node
process.on('unhandledRejection', error => {
  console.error(error);
});

const readline = require('readline');

// Set up readline to read from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (input) => {
  try {
    const merge = require('../dist/index').default; //we load it from dist, please build before
    const parsedData = JSON.parse(input);
    const output = merge(parsedData);
    console.log(JSON.stringify(output));
    rl.close();
  } catch (error) {
    console.error('Error parsing JSON:', error.message);
    rl.close();
  }
});