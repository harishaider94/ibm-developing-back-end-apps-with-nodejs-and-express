const express = require('express');
let books = require("./booksdb.js");
const public_users = express.Router();


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books,null,4));
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
