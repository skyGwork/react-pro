import React from 'react';

// ! named import
import { books } from './model/bookData';
import { Book } from './components/Book';

function App() {
  return (
    <section className="book_section">
      {books.map((e) => {
        return <Book key={e.id} {...e} />;
      })}
    </section>
  );
}

export default App;
//!default export 