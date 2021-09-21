const express = require('express');
const router = express.Router();


const booksArray = ['']; // Requirement 01 - create a empty book array


router.post('/addBook', (req, res, next) => { // Requirement 02 // Requirement 2:  Include a link to another page called Add Product. 
  const newBook = req.body.newBook;
  booksArray.push(newBook); // push new user information into userArray
  res.redirect('/prove02/'); // redirect the url
});
router.post('/removeBook', (req, res, next) => { // // Allow a way for the user to delete a product.
    const removeBook = req.body.removeBook;

const index = booksArray.indexOf(removeBook);   // Splice method removes from a const array
if (index !== -1) {
  booksArray.splice(index, 1);
}

res.redirect('/prove02/');
});

router.get('/add-product', (req, res, next) => { // Requirement 1: Use GET to display a page with all books. (When this page first loads, no products will be present).
  res.render('pages/prove02-add-product', {
    title: 'Add Product',
    books: booksArray,
    path: '/prove02-add-product', // For pug, EJS
    activeProve02: true, // For HBS
    contentCSS: true, // For HBS
  });
  });

router.get('/', (req, res, next) => { // Requirement 1: Use GET to display a page with all books. (When this page first loads, no products will be present).
res.render('pages/prove02', {
  title: 'Prove 02',
  books: booksArray,
  path: '/prove02', // For pug, EJS
  activeProve02: true, // For HBS
  contentCSS: true, // For HBS
});
});

module.exports = router;


// Requirement 2:  Include a link to another page called Add Product. 
// This page should be loaded using GET as well. Include a form on this add product page that 
// will submit a POST request when submitted. This form should include at least the title of the new book. 
// When the form is submitted, add the new book to the array of products and go to the original page which shows all products.

// Allow user save multiple entries (for example: title, price, description, ratings, etc.).



// Anything else you can think of to make this app more productive. Amazon has implemented a lot of good ideas. :)




