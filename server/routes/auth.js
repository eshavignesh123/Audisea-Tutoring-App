const express = require('express');
const User = require('../models/User'); // Mongoose model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

async function createUser() {
  const newUser = new User({
    email: "eshavigneswaran@gmail.com",
    password: "esha", // Provide the plain-text password here
    role: "admin"
  });

  await newUser.save();
}

createUser();




// Register Route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Login Route
router.post('/api/auth/login', async (req, res) => {
  console.log("Stuff: ", req.body);
  const { email, password } = req.body;
  console.log("use", email);


  try {
    const user = await User.findOne({ email });
    console.log("User: ", user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '6h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.post('/api/auth/logout', async (req, res) => {
  try {
    res.status(200).json({ message: 'Logged out successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
