// 1. Importing FS
const fs = require('fs');

// 2. Writing Files
// fs.writeFileSync('file.txt','hello node.js!');
// console.log('File written successfully');

// 3. Reading Files
// const data = fs.readFileSync('file.txt', 'utf-8');
// console.log(data);

// 4. Appending to Files
// fs.appendFileSync('file.txt', '\nAppended text.');
// console.log('Text appended successfully');

// 5. Deleting Files
// fs.unlink('file.txt', (err) => {
//     if (err) {
//         console.error('Error deleting file:', err); 
//     } else {
//         console.log('File deleted successfully');
//     }   
// });
// 6. Renaming Files
// fs.rename('file.txt','renametext.txt',
//     (err) => {
//         if (err) {
//             console.error('Error renaming file:', err);
//         }
//         else {
//             console.log('File renamed successfully');
//         }
//     }
// );
// // 7. Checking File Existence
// if (fs.existsSync('file.txt')) {
//     console.log('File exists');
// } else {
//     console.log('File does not exist');
// }

// 8. Getting File Information
// const stats = fs.statSync('renametext.txt');
// console.log('File Size:', stats.size);
// console.log('Created At:', stats.birthtime);
// console.log('Last Modified:', stats.mtime);

// 9. Creating Directories

// try {
//   fs.mkdirSync('newDir/subDir', { recursive: true });
//   console.log('Directory created successfully!');
// } catch (err) {
//   console.error(err);
// }

// 10. Reading Directories
// const files = fs.readdirSync('newDir');
// console.log('Files in directory:', files);

// 11. Deleting Directories]
// fs.rmdir('newDir/subDir', { recursive: true }, (err) => {
//     if (err) {
//         console.error('Error deleting directory:', err);    
//     } else {
//         console.log('Directory deleted successfully');
//     }
// });

