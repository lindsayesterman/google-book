import React, { Component } from 'react';
import BookList from './bookList';
import Fab from './fab.js';

class BookApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Books</h2>
        <BookList books={this.props.books}/>
        <Fab showForm={this.props.showForm}/>
      </div>
    );
  }
}

export default BookApp;