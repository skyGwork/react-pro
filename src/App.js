import React from 'react';

const books = [
  {
    id: 1,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
    title: 'The Psychology of Money',
    auther: 'Morgan Housel',
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg',
    title: 'Subconscious Mind',
    auther: 'Joseph Murphy',
  },
  {
    id: 3,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
    title: 'The Psychology of Money',
    auther: 'Morgan Housel',
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg',
    title: 'Subconscious Mind',
    auther: 'Joseph Murphy',
  },
];

function App() {
  return (
    <section className="book_section">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
const Book = ({ img, title, auther }) => {
  const likeHandler = () => {
    alert('@You liked this book!');
  };

  return (
    <article
      className="book"
      onClick={() => {
        alert('@ Great Choice!');
      }}
    >
      <img src={img} alt="book" />
      <h4 onClick={() => alert('This book is available in stock')}>{title} </h4>
      <p>{auther}</p>
      <div>
        <button type="button" onClick={likeHandler} className="u_btn">
          Like
        </button>
      </div>
    </article>
  );
};

export default App;
