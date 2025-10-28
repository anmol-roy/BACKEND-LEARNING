const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.use(express.json()); // allow JSON body

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
  try {
    const user = await userModel.create({
      userName: 'sheriyan',
      email: 'sher@gmail.com',
      age: 22,
    });
    res.send(user);
  } catch (err) {
    res.status(500).send('Error creating user: ' + err.message);
  }
});

app.get('/post/create', async (req, res) => {
  try {
    // 1️⃣ Create a new post
    const post = await postModel.create({
      postdata: "This is my first post",
      user: "69008d40d9864d353baab709"
    });

    // 2️⃣ Find the user
    const user = await userModel.findById("69008d40d9864d353baab709");
    if (!user) {
      return res.status(404).send("User not found");
    }

    // 3️⃣ Push the post ID into user's posts array
    user.posts.push(post._id);
    await user.save();

    // 4️⃣ Send both post and user back in response
    res.status(201).send({ post, user });
  } catch (err) {
    res.status(500).send("Error creating post: " + err.message);
  }
});


app.listen(3002, () => {
  console.log('Server is running on port 3002');
});
