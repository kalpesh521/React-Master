import Book from "./Book";
import './main.css';

function App() {
    return (
        <section className='booklist'>
            <Book title="Math" author="Kalpesh" />
            <Book title="Physics" author="Dr. APJ Abdul Kalam"><p>India is my country...</p></Book>  
            {/* We have to use children in cae if have to pass childern prop data */}
            <Book title="Biology" author="Charles Darwin" />
            <Book title="Chemistry" author="Marie Curie" />
            <Book title="Astronomy" author="Galileo Galilei" />
            <Book /> {/* Uses default values */}
        </section>
    );
}

export default App;
