import React, {useState, useEffect, useRef} from "react";
import Card from "./Card";

function BookList() {
    const [books, setBooks] = useState([]);
    const [listTitle,setListTitle] = useState('Books List'); //Initial title
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const titleInputRef = useRef(null);
    
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('/booksList.json');
            const data = await response.json();
            setBooks(data.results.books);
        };
        fetchBooks();
    }, []);

    useEffect(() => {
        if(isEditingTitle && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [isEditingTitle]);
    const toggleEditingTitle = () => setIsEditingTitle((prev) => !prev);
    const toggleDescription = () => setShowDescription((prev) => !prev);
    const handleTitleChange = (e) => setListTitle(e.target.value);
    
    return (
        <div style={{padding:'20px', fontFamily:'Arial, sans-serif'}}>
            <header style={{display:'flex',alignItems:'center', gap:'10px', marginBottom:'20px'}}>
                {isEditingTitle ? (
                    < input
                        type ="text"
                        value ={listTitle}
                        onChange={handleTitleChange}
                        ref={titleInputRef}
                        onBlur={() => setIsEditingTitle(false)}
                        style ={{fontSize:'24px', padding:'5px', border:'1px solid #ccc', borderRadius:'5px', width:'250px'}}
                        />
                ) : (
                    <h2 style ={{ fontSize:'24px', margin:'0'}}>{listTitle}</h2>
                )}
                <button
                    onClick={toggleEditingTitle}
                    style={{
                        padding:'5px 10px',
                        fontSize:'16px',
                        border:'none',
                        backgroundColor: isEditingTitle ? '#4CAF50' :'#008CBA',
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    >{isEditingTitle ? 'Save' : 'Edit'}
                </button>
                <button
                    onClick={toggleDescription}
                    style={{
                        padding:'5px 10px',
                        fontSize:'16px',
                        border:'none',
                        backgroundColor: showDescription ? "#f44336" : "#4CAF50",
                        color: 'white',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    >{showDescription ? 'Hide Description' : 'Show Description'}
                </button>
            </header>
            {/* Book List Selection */}
            <div style={{display:'flex', flexWrap:'wrap', gap:'20px', justifyContent:'center'}}>
                {books.map((book) => (
                    <Card 
                    key={book.rank}
                    image = {book.book_image}
                    title = {book.title}
                    author = {book.author}
                    description = {showDescription ? book.description : null}
                    />
                ))}
            </div>
        </div>    
    );
}

export default BookList;