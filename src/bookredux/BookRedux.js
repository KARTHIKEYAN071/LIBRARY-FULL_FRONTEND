import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "./BookActions";
import "./bookredux.css"
const App = (props) => {
  const [newBook, setNewBook] = useState("");

  const handleInputChange = (event) => {
    setNewBook(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.trim() !== "") {
      props.addBook({ id: Date.now(), title: newBook });
      setNewBook("");
    }
  };

  return (
    <div className="reduxmain">
    <div className="suggest">
      <h1 className="title">SUGGEST BOOKS TO ADD</h1>
      <ul className="booklist">
        {props.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
        className="enterbook"
          type="text"
          value={newBook}
          onChange={handleInputChange}
          placeholder="Enter a new book title..."
        />
        <button className="addbookbtn" type="submit">Add Book</button>
      </form>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  addBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
