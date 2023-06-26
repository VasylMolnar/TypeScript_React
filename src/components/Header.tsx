import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/todos" className="nav-link">
                    Todos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
