// const path = require('path');

// const fullPath = path.join(__dirname, 'file.txt');
// console.log(`The full path is: ${fullPath}`);

// // (b) path.resolve([...paths])
// const resolvedPath = path.resolve('file.txt');
// console.log(`The resolved path is: ${resolvedPath}`);

// // c) path.basename(path, [ext])
// const baseName = path.basename(fullPath);
// console.log(`The base name is: ${baseName}`);

// // (d) path.dirname(path)
// const dirName = path.dirname(fullPath);
// console.log(`The directory name is: ${dirName}`);

// // (e) path.extname(path)
// const extName = path.extname(fullPath);
// console.log(`The extension name is: ${extName}`);

// // (f) path.parse(path)
// const parsedPath = path.parse(fullPath);
// console.log('The parsed path is:', parsedPath);

// // (g) path.format(pathObject)
// const formattedPath = path.format(parsedPath);
// console.log(`The formatted path is: ${formattedPath}`);

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test', 'data.txt');

// Ensure file exists
if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, 'Learning Node.js Path module');
}

console.log('📁 Directory Name:', path.dirname(filePath));
console.log('📄 File Name:', path.basename(filePath));
console.log('📄 File Extension:', path.extname(filePath));
console.log('📦 Parsed Path Object:', path.parse(filePath));
