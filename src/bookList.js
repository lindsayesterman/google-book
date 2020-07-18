import React, { Component } from 'react';
import Book from './book.js';

class BookList extends Component {
  render() {
    const books = this
          .props
          .books
          .map((book, i) => <Book { ...book } key={i}/>);
    return (
      <div className="bookmarkList">
        {books}
      </div>
    );
  }
}

BookList.defaultProps = {
  books: []
};

export default BookList;