import bookcover from "./assets/images/power-book.jpg";

const Book = ({ title = "Unknown Title", author = "Unknown Author", children }) => {
    return (
        <article className='book'>
            <Image />
            <Title title={title} />
            <Author author={author} />
            {children}
        </article>
    );
};

export default Book;

const Image = () => {
    return <img src={bookcover} alt="Book Cover" width="150" height="200" />;
};

const Title = ({ title }) => <h2>{title}</h2>;

const Author = ({ author }) => (
    <h2 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
        {author}
    </h2>
);
