const express = require('express');
const router = express.Router();


const userArray = ['Michael', 'Kina', 'Tori']; // Requirement 01 of TA02 - create a user array


router.post('/addUser', (req, res, next) => { // Requirement 02 of TA02
  const newUser = req.body.newUser;
  userArray.push(newUser); // push new user information into userArray
  res.redirect('/ta02/'); // redirect the url
});


router.post('/removeUser', (req, res, next) => { // Requirement 03 of TA02
  const removeUser = req.body.removeUser;

  const index = userArray.indexOf(removeUser);   // Splice method removes from a const array
  if (index !== -1) {
    userArray.splice(index, 1);
  }

  res.redirect('/ta02');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: userArray,
    path: '/ta02', // For pug, EJS
    activeTA02: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;