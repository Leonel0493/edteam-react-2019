import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <Link to="/">
            <img
              className="main-logo"
              src="https://app.ed.team/images/logo/isotipo-color.svg"
              alt="site"
            />
          </Link>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/form">Form</NavLink>
              </li>
              <li>
                <NavLink to="/proffesors">Proffesors</NavLink>
              </li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
