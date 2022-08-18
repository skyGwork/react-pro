import React from 'react';

const firstBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg',
  title: 'The Psychology of Money',
  auther: 'Morgan Housel',
};
const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg',
  title: 'Subconscious Mind',
  auther: 'Joseph Murphy',
};
function App() {
  return (
    <section className="book_section">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        auther={firstBook.auther}
      >
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam
          saepe sunt ex exercitationem optio provident nobis eius a veniam
          obcaecati perspiciatis, quasi, maxime non cum minus? Facere, officiis
          ipsa.
        </span>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        auther={secondBook.auther}
      />
    </section>
  );
}
const Book = (props) => {
  const { img, title, auther, children } = props;
  return (
    <article className="book">
      <img src={img} alt="book" />
      <h4>{title} </h4>
      <p>{auther}</p>
      {children}
    </article>
  );
};

export default App;
