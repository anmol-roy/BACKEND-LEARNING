const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Set EJS and middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Home page - list all files
app.get('/', (req, res) => {
  fs.readdir('./files', (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Unable to scan directory.');
    }
    res.render('index', { files });
  });
});

// Create new file (task)
app.post('/create', (req, res) => {
  const title = req.body.title.split(' ').join('');
  const details = req.body.details || 'No details provided.';

  fs.writeFile(`./files/${title}.txt`, details, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }
    console.log(`✅ File "${title}.txt" created successfully`);
    res.redirect('/');
  });
});

// View individual file content
app.get('/file/:filename', (req, res) => {
  const filePath = `./files/${req.params.filename}`;
  fs.readFile(filePath, 'utf8', (err, filedata) => {
    if (err) {
      console.error(err);
      return res.status(404).send('File not found');
    }
    res.render('show', { filename: req.params.filename, filedata });
  });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
