import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  return (
    <header class="main-header">
      <div class="ed-grid s-grid-5 lg-grid-4">
        <div class="s-cols-4 lg-cols-1 s-cross-center">
          <Link to="/">
            <img
              class="main-logo"
              src="https://app.ed.team/images/logo/isotipo-color.svg"
            />
          </Link>
        </div>
        <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav class="main-menu" id="main-menu">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/form">Form</NavLink>
              </li>
            </ul>
          </nav>
          <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
