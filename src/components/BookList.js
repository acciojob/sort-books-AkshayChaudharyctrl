import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from './actions';

const BookList = ({ books, fetchBooks }) => {
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Function to sort books by a specific property
  const sortBooks = (property) => {
    const sortedBooks = [...books].sort((a, b) => a[property].localeCompare(b[property]));
    // You need to dispatch an action here to update the store with the sorted books
    // For now, you can log the sortedBooks array
    console.log(sortedBooks);
  };

  return (
    <div>
      <h1>Book List</h1>
      <button onClick={() => sortBooks('title')}>Sort by Title</button>
      <button onClick={() => sortBooks('author')}>Sort by Author</button>
      <button onClick={() => sortBooks('publisher')}>Sort by Publisher</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} - {book.publisher}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
