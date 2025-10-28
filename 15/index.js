const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { log } = require('console');

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
  try {
    const { username, email, password, age } = req.body;

    // 🔹 Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // 🔹 Save user to database
    await userModel.create({ username, email, password: hash, age });

    // 🔹 Generate JWT
    const token = jwt.sign({ username, email }, 'secretkey', { expiresIn: '1h' });

    // 🔹 Set token cookie
    res.cookie('token', token, { httpOnly: true });

    res.status(201).send('User created successfully');
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).send('Error creating user: ' + err.message);
  }
});

app.get('/login', async (req, res) => {
  res.render('login'); // make sure views/login.ejs exists


});

app.post('/login', async (req, res) => {
  let user = await  userModel.findOne({ email: req.body.email });
  console.log(user);
  if(user){
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if(isPasswordValid){
      const token = jwt.sign({ username: user.userNmae, email: user
.email }, 'secretkey', { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/');
    }else{
      res.status(401).send('Invalid password');
    }
  }else{
    res.status(404).send('User not found');
  }
  if (!user) return res.status(404).send('SOMETHING IS WRONG');
  
  console.log('User logged in:', user.password, req.body.password);

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if(result){
      res.send( 'Login successful' )
    }else{
      res.status(401).send('Invalid credentials');
    }
      

});
});




app.get('/logout', async (req, res) => {
  res.cookie("token","");
  res.redirect('/');
});
 


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});