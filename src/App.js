import React, { Component } from 'react';
import './App.css';
import AddBook from './addBook.js';
import BookApp from './bookApp.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showAddForm: false
    };
  }

  componentDidMount() {
    const apiKey = `AIzaSyD1rgrZVxc_KM5GMl6hj67ubEFOzGJsPlc`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&key=${apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer AIzaSyD1rgrZVxc_KM5GMl6hj67ubEFOzGJsPlc",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }

  setShowAddForm(show) {
    this.setState({
      showAddForm: show
    });
  }

  addBook(book) {
    this.setState({
      books: [...this.state.books, book],
      showAddForm: false
    });
  }

  render() {
    const page = this.state.showAddForm
          ? <AddBook 
                 showForm={show => this.setShowAddForm(show)} 
                 handleAdd={book => this.addBook(book)}/>
          : <BookApp books={this.state.books} showForm={show => this.setShowAddForm(show)}/>; 

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;