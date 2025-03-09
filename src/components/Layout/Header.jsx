import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="logo">
          MyLogo
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/movie" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Movie
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
