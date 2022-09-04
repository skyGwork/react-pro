import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/book-list">book-list</Link>
      <Link to="/contact">Contect</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};
export default Navbar;
