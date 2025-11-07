const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/create', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/profile', isLoggedIn, async (req, res) => {
  try {
    // Find the logged-in user
    const user = await userModel.findOne({ email: req.user.email });

    // Find all posts created by this user (user._id)
    const posts = await postModel.find({ user: user._id }).populate('user');

    // Render the profile page with both user and posts
    res.render('profile', { user, posts });

  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading profile');
  }
});

app.get("/like/:postId", isLoggedIn, async (req, res) => {
  let post = await postModel.findById(req.params.postId).populate('user');

  if (post.likes.indexOf(req.user.userId) === -1) {
    post.likes.push(req.user.userId);   // ✅ corrected here
  } else {
    post.likes.splice(post.likes.indexOf(req.user.userId), 1);
  }

  await post.save();
  res.redirect('/profile');
});

app.get("/edit/:postId", isLoggedIn, async (req, res) => {
  const post = await postModel.findById(req.params.postId).populate('user');
  res.render('edit', { post });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content },
    { new: true } // returns the updated document
  );
  res.redirect('/profile');
});




app.post('/post', isLoggedIn, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email });

    // Create new post linked to user
    const post = await postModel.create({
      user: user._id,
      content: req.body.content
    });

    res.redirect('/profile'); // after creation go back to profile
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating post");
  }
});


app.post('/register', async (req, res) => {
  let { username, name, Age, email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (user) return res.status(500).send('User already exists');

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).send('Error generating salt');

    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) return res.status(500).send('Error hashing password');

      let newUser = await userModel.create({
        username,
        name,
        Age,
        email,
        password: hash
      });

      const token = jwt.sign(
        { email: newUser.email, userId: newUser._id },
        'secret'
      );

      res.cookie('token', token);
      res.redirect('/login');
    });
  });
});

app.post('/login', async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500).send('User not found');

  bcrypt.compare(password, user.password, (err, result) => {
    if (err) return res.status(500).send('Error comparing passwords');
    if (!result) return res.status(500).send('Invalid credentials');

    const token = jwt.sign(
      { email: user.email, userId: user._id },
      'secret'
    );

    res.cookie('token', token);
    res.redirect('/profile');
  });
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

function isLoggedIn(req, res, next) {
  
  if (!req.cookies || !req.cookies.token) {
    return res.render('login');
  }

  try {
    let data = jwt.verify(req.cookies.token, 'secret');
    req.user = data;
    next();
  } catch (err) {
    return res.send('Invalid token, please login again');
  }
}

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
