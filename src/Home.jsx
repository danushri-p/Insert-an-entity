import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/BookCard"; // Assuming you have this component
import booksData from "./booksData"; // Your books data file

const Home = () => {
  return (
    <div>
      <h1>Book Library</h1>
      {/* Add Book Button */}
      <Link to="/add-book">
        <button className="add-book-btn">Add Book</button>
      </Link>
      
      <div className="book-list">
        {booksData.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
