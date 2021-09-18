const express = require('express');
const fs = require('fs'); // File system
const router = express.Router();

// assignment to handle two routes: "/" and "/users"

router.get('/', (req, res, next) => {  // Return a greeting message on the "/" route
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node JS Assignment - Basics </title></head>');
    res.write('<body>')  
    res.write('<h1>Hello and welcome to my first page of the Academind Assignment - Basics</h1>')      
    res.write('<p>You are recieving this message as part of the first route "/"</p>')
    res.write('<p>To view the second route please change the url to /users or click here <a href="prove01/users">Go to /users</a></p>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'); // "/" page, add a <form> with a "username" <input> that is submitted using a POST request to "/create-user
    res.write('<body>')
    res.write('</html>');
    return res.end();
});

//Return a list of dummy users on the "/users" route
router.get('/users', (req, res, next) => {
    res.write('<html>');
    res.write('<head><title>List of Users</title></head>');
    res.write('<body>');
    res.write('<h1>List of Users</h1>');
    res.write('<ul><li>Batman</li><li>Superman</li><li>Wonder Woman</li></ul>'); // Return a list of dummy users on the "/users" route
    res.write('<a href="/prove01">Return to Home Page of Prove 01 Assignment</a>');
    res.write('</body>')
    res.write('</html>');
    return res.end();
  });
  // Send a HTML response with some "Page not found text
router.get('/create-user', (req, res, next) => {
    const body = [];  // create empty array "body" to store data chunks
    req.on('data', chunk => {
        body.push(chunk); // push the data into the data array
        
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString(); // create a buffer of all the data and convert to string
      console.log(parsedBody.split('=')[1]); // split on equal sign to see value username=whatever-the-user-entered
    });
    res.statusCode = 302; // redirect status code
    res.setHeader('Location', '/'); // redirect the browser to /
    res.end();// exit function
  });

  module.exports = router;
