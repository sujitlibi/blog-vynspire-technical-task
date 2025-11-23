// Home Layout.js
import { Outlet, Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <h1>Vynspire Technical Task - Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
