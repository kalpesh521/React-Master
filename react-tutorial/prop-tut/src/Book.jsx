const Book = (props) => {
  const { img, title, author, displayData, getBook, id } = props;

  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>

      {/* Get Single Book using id */}
      <button onClick={getSingleBook}>Display Date</button>

      {/* Display provided data */}
      {/* <button onClick={displayData} >Display Date</button> */}
    </article>
  );
};

export default Book;
