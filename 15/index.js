const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
  res.render('app'); // make sure views/app.ejs exists
});

app.post('/create', async (req, res) => {
  const { username, email, password, age } = req.body; // ✅ fixed typo
  try {
    await userModel.create({ username, email, password, age });
    res.send('User created successfully');
  } catch (err) {
    res.status(500).send('Error creating user: ' + err.message);
  }
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});