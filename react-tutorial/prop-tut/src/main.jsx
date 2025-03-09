import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
import ExamplesForm from "./ExamplesForm";

/* 
 Using Spread Operator (...) and Props ✅

🚀 Code Flow Explanation : 

1️⃣ The BookList component imports the books array (which contains book details).
2️⃣ It uses .map() to loop through the array, dynamically creating a Book component for each book.
3️⃣ Each Book component receives props using the spread operator (...book), passing down all object properties.
4️⃣ The Book component extracts the title, author, and image and renders them inside an <article>.
5️⃣ The BookList component returns the list of books, which gets displayed in the UI.
*/


function BookList() {
  const date = "1st March 2025"
  const displayData=()=>{
     console.log(date);
  }

  const getBook = (id) =>{
    const book = books.find((book) => book.id ==id)
    console.log(book);
  }
  return (
    <>
     
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} displayData={displayData}  getBook={getBook}/>;
        })}
         <ExamplesForm/>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
