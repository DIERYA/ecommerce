import React from "react";
import "./Book.css";
import books from "../../data/books-data";
import Card from "../Card/Card";

const Book = () => {
  

  return (
    <div className="book-container">
      {books.map((bookData) => (
        <Card cardData={bookData} key={bookData.id} />
      ))}
    </div>
  );
};

export default Book;


