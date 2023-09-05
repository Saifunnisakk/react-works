import Main from "../layouts/Main";

import React, { Component } from 'react';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          genre: 'Classic',
          available: true,
        },
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          genre: 'Classic',
          available: false,
        },
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          genre: 'Fantasy',
          available: true,
        },
      ],
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate a delay with setTimeout to load the book data
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)
  }

  render() {
    return (<>
    <Main>
      <div className="library-info">
        <h1>Library Information</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookList.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td>{book.available ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      </Main>
      </>
    );
  }
}

export default Library;
