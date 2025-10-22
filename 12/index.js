const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
}
);

app.get('/read',async (req, res) => {
    let users = await userModel.find();
    res.render('read', { users });

});
app.post('/create', (req, res) => {
    let { name, email,image } = req.body;
    userModel.create({
        name,
        email,
        image
    }).then(() => {
        res.redirect('/read');
    }).catch((err) => {
        res.status(500).send('Error creating user: ' + err.message);
    });
});
app.get('/delete/:id', async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.redirect('/read');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Failed to delete user');
  }
});
app.get('/edit/:id', async (req, res) => {
  try {
    let user = await userModel.findById(req.params.id);
    res.render('edit', { user });
  } catch (error) {
    console.error('Error fetching user for edit:', error);
    res.status(500).send('Failed to fetch user for edit');
  }
});
app.post('/update/:id', async (req, res) => {
  try {
    let { name, email, image } = req.body;
    await userModel.findByIdAndUpdate(
      req.params.id,
      { name, email, image },
      { new: true }
    );
    res.redirect('/read');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Failed to update user');
  }
});




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});