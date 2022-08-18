import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/book-list"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        book-list
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        contact
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
    </nav>
  );
};
export default Navbar;
