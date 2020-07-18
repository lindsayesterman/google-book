import React, { Component } from  'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  titleChanged(title) {
    this.setState({
      title
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = (({title}) => ({title}))(this.state);
    const apiKey = `AIzaSyD1rgrZVxc_KM5GMl6hj67ubEFOzGJsPlc`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&key=${apiKey}`;    
    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer AIzaSyD1rgrZVxc_KM5GMl6hj67ubEFOzGJsPlc"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: ""
        });
        this.props.handleAdd(book);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    const error = this.state.error 
          ? <div className="error">{this.state.error}</div>
          : "";

    return (
      <div className="addbookmark">
        <h2>Add Book</h2>
        { error }
        <form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.titleChanged(e.target.value)}/>
          <div className="addbookmark__buttons">
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddBook;