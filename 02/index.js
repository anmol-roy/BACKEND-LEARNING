const fs = require('fs');

fs.writeFile('hey.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created and content written.');
});
fs.appendFile('hey.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created and content written.');
});
fs.rename('hey.txt', 'hello.txt', (err) => {
    if (err) throw err;
    console.log('File renamed.');
});
fs.copyFile('hello.txt', 'copy_hello.txt', (err) => {
    if (err) throw err;
    console.log('File copied.');
});
fs.unlink('copy_hello.txt', (err) => {
    if (err) throw err;
    console.log('File deleted.');
});