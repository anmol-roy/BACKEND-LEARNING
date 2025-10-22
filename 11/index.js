const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);
app.get('/create', async (req, res) => {
  try {
    const createdUser = await userModel.create({
      name: 'Anmol',
      email: 'anmol@gmail.com',
      password: 'password123'
    });

    res.status(201).json({
      message: 'User created successfully!',
      user: createdUser
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error creating user',
      error: error.message
    });
  }
});

app.get('/update', async (req, res) => {
  try {
    const user = await userModel.findOneAndUpdate(
      { email: 'anmol@gmail.com' },   // filter
      { name: 'Anmol Updated' },      // update
      { new: true }                   // return updated document
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User updated successfully!',
      user: user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error updating user',
      error: error.message
    });
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await userModel.find(username='Anmol Updated');
    res.status(200).json({
      message: 'Users retrieved successfully!',
      users: users
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error retrieving users',
      error: error.message
    });
  }
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);
app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});