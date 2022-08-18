export const Book = ({ img, title, auther }) => {
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
