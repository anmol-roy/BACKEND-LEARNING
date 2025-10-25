const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Middleware to parse cookies
// $2b$10$z0FkoczXbKVt/5McyEzxPOrzZ7vJrSu3MY558YPfkgYwHoD8EpSWq

app.use(cookieParser());

// app.get('/', (req, res) => {
//    bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash('mysecretpassword', salt, (err, hash) => {
//         if (err) {
//             return res.status(500).send('Error hashing password');
//         }
//         console.log(hash);
        
//     });
//    });
// });


// app.get('/', (req, res) => {
//     const hashedPassword = '$2b$10$z0FkoczXbKVt/5McyEzxPOrzZ7vJrSu3MY558YPfkgYwHoD8EpSWq'; // Example hashed password
//     const passwordToCompare = 'mysecretpassword';

//     bcrypt.compare(passwordToCompare, hashedPassword, (err, result) => {
//         if (err) {
//             return res.status(500).send('Error comparing passwords');
//         }
//         if (result) {
//             res.send('Password match!');
//         }
//         else {
//             res.send('Password does not match.');
//         }
//     });
// });


app.get('/', (req, res) => {
    const token = jwt.sign({ email: 'anmol@gmail.com' }, 'mysecretkey', { expiresIn: '1h' });
    console.log('Generated Token:', token);

    res.cookie('token', token, { httpOnly: true });
    res.send('Token generated and set in cookie');
});

// Verify token
app.get('/verify', (req, res) => {
    try {
        const decoded = jwt.verify(req.cookies.token, 'mysecretkey');
        console.log('Decoded Data:', decoded);
        res.send('Token is valid');
    } catch (err) {
        console.error('Verification failed:', err.message);
        res.status(401).send('Invalid token');
    }
    
});

















app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

