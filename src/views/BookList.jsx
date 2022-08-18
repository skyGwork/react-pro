import React from 'react';
import { Link} from 'react-router-dom';

import { books } from '../model/bookData';
import { Book } from '../components/Book';

function BookList() {
  return (
    <section className="book_section">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
      <Link to="/">back home</Link>
    </section>
  );
}

export default BookList;
