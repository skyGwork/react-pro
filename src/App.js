import React from 'react';

function App() {
  return (
    <section className="book_section">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = (params) => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Auther />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg"
    alt="book"
  />
);
const Title = () => {
  return <h4>The Psychology of Money</h4>;
};
const Auther = () => {
  return (
    <p style={{ color: '#617d98', fontSize: '1.5rem', marginTop: '.25rem' }}>
      Morgan Housel
    </p>
  );
};

export default App;
