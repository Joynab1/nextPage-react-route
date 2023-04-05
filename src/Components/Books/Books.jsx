import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from '../Book/Book';
import LoadingSpinner2 from '../LoadingSpinner2/LoadingSpinner2';

const Books = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner2/>
    }
    const { books } = useLoaderData();
    return (
        <div className='my-container'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">

                {
                    books.map(book =>
                       <Book
                       key={book.isbn13}
                       book={book}
                       ></Book>
                    )
                }
            </div>
        </div>
    );
};

export default Books;