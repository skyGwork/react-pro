import React from 'react';

import { books } from '../model/bookData';
import { Book } from '../components/Book';

function BookList() {
  return (
    <section className="book_section">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BookList;
