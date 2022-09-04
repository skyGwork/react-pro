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
];

function App() {
  return (
    <section className="book_section">
      {books.map((e) => {
        return <Book key={e.id} book={e} />;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, auther } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h4>{title} </h4>
      <p>{auther}</p>
    </article>
  );
};

export default App;
