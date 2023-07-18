const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
});

public_users.get('/all', function (req, res) {
  new Promise((resolve, reject) => {
    resolve(JSON.stringify(books, null, 4));
  })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      // Handle any errors that occurred during the Promise chain
      console.error(error);
      res.status(500).send('An error occurred');
      reject(error);
    });
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const filteredBooks = Object.keys(books).filter((key) => books[key].isbn === isbn);
  const book = books[filteredBooks];  
    if (book) {
      res.send(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
 });

 public_users.get('/isbn-2/:isbn',function (req, res) {
  new Promise((resolve, reject) => {
    const isbn = req.params.isbn;
    const filteredBooks = Object.keys(books).filter((key) => books[key].isbn === isbn);
    const book = books[filteredBooks];  
    resolve(book);
  })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      // Handle any errors that occurred during the Promise chain
      console.error(error);
      res.status(404).json({ message: 'Book not found' });
      reject(error);
    });
});
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const filteredBooks = Object.keys(books).filter((key) => books[key].author === author);
  const book = books[filteredBooks];  
    if (book) {
      res.send(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
});

public_users.get('/author-2/:author',function (req, res) {
  new Promise((resolve, reject) => {
    const author = req.params.author;
    const filteredBooks = Object.keys(books).filter((key) => books[key].author === author);
    const book = books[filteredBooks];  
    resolve(book);
  })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      // Handle any errors that occurred during the Promise chain
      console.error(error);
      res.status(404).json({ message: 'Book not found' });
      reject(error);
    });
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  const filteredBooks = Object.keys(books).filter((key) => books[key].title === title);
  const book = books[filteredBooks];  
    if (book) {
      res.send(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
});


public_users.get('/title-2/:title',function (req, res) {
  new Promise((resolve, reject) => {
    const title = req.params.title;
    const filteredBooks = Object.keys(books).filter((key) => books[key].title === title);
    const book = books[filteredBooks];  
    resolve(book);
  })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      // Handle any errors that occurred during the Promise chain
      console.error(error);
      res.status(404).json({ message: 'Book not found' });
      reject(error);
    });
});


//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const filteredBooks = Object.keys(books).filter((key) => books[key].isbn === isbn);
  const book = books[filteredBooks];  
    if (book) {
      res.send(book.reviews);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
});

module.exports.general = public_users;
