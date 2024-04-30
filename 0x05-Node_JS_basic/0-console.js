#!/usr/bin/node

function displayMessage() {
  process.stdout.write(`${process.argv[2]}\n`);
}

module.exports = displayMessage;
