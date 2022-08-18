import React from 'react';

const books = [
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
    title: 'The Psychology of Money',
    auther: 'Morgan Housel',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg',
    title: 'Subconscious Mind',
    auther: 'Joseph Murphy',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
    title: 'The Psychology of Money',
    auther: 'Morgan Housel',
  },
];

function App() {
  return (
    <section className="book_section">
      {books.map((book) => {
        return <Book next={book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, auther } = props.next;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h4>{title} </h4>
      <p>{auther}</p>
    </article>
  );
};

export default App;
