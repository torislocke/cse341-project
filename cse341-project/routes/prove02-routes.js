const express = require('express');
const fs = require('fs'); // File system
const router = express.Router();

// Requirement 1: Use GET to display a page with all books. (When this page first loads, no products will be present).



// Requirement 2:  Include a link to another page called Add Product. 
// This page should be loaded using GET as well. Include a form on this add product page that 
// will submit a POST request when submitted. This form should include at least the title of the new book. 
// When the form is submitted, add the new book to the array of products and go to the original page which shows all products.

// Allow user save multiple entries (for example: title, price, description, ratings, etc.).

// Allow a way for the user to delete a product.

// Anything else you can think of to make this app more productive. Amazon has implemented a lot of good ideas. :)


module.exports = router;

