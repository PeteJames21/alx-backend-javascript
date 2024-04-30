#!/usr/bin/node
process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  // Process the input data
  console.log('Your name is:', data.trim());
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
