import { Link, Outlet } from 'react-router-dom';
<Link to="/">back home</Link>

const HomeView = () => {
  return (
    <section className="section">
      <h2>home page</h2>
      <Outlet />
    </section>
  );
};
export default HomeView;
