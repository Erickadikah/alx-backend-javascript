console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (name) => {
  // const name = process.stdin.read()
  // if (name !== null) {
  console.log(`Your name is: ${name}`);
  // }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
