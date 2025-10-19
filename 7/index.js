const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;

// Ensure files directory exists
const filesDir = path.join(__dirname, 'files');
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
  console.log('📁 "files" directory created.');
}

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to sanitize filenames
function sanitizeFilename(name) {
  return name.replace(/[^a-z0-9_\-]/gi, '');
}

// Home page: list all files
app.get('/', (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) return res.status(500).send('Unable to scan directory.');
    res.render('index', { files });
  });
});

// Create new task
app.post('/create', (req, res) => {
  const title = sanitizeFilename(req.body.title);
  const details = req.body.details || 'No details provided.';
  const filepath = path.join(filesDir, `${title}.txt`);

  if (!title) return res.status(400).send('Invalid title.');

  if (fs.existsSync(filepath)) {
    return res.status(400).send('File already exists.');
  }

  fs.writeFile(filepath, details, (err) => {
    if (err) return res.status(500).send('Error creating file');
    console.log(`✅ File "${title}.txt" created successfully`);
    res.redirect('/');
  });
});

// View file content
app.get('/file/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(filesDir, filename);

  fs.readFile(filepath, 'utf8', (err, filedata) => {
    if (err) return res.status(404).send('File not found');
    res.render('show', { filename, filedata });
  });
});

// Edit task page
app.get('/edit/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(filesDir, filename);

  fs.readFile(filepath, 'utf8', (err, filedata) => {
    if (err) return res.status(404).send('File not found');
    res.render('edit', { filename, filedata });
  });
});

// Update task
app.post('/update/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const updatedContent = req.body.details;
  const filepath = path.join(filesDir, filename);

  fs.writeFile(filepath, updatedContent, (err) => {
    if (err) return res.status(500).send('Error updating file');
    console.log(`✏️ File "${filename}" updated successfully`);
    res.redirect('/');
  });
});

// Delete task
app.post('/delete/:filename', (req, res) => {
  const filename = path.basename(req.params.filename);
  const filepath = path.join(filesDir, filename);

  fs.unlink(filepath, (err) => {
    if (err) return res.status(500).send('Error deleting file');
    console.log(`🗑️ File "${filename}" deleted successfully`);
    res.redirect('/');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
