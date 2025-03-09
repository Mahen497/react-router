import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We provide the best web solutions with a passion for designing and
            developing digital experiences.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <NavLink to="#" target="_blank">Facebook</NavLink>
            <NavLink to="#" target="_blank">Twitter</NavLink>
            <NavLink to="#" target="_blank">Instagram</NavLink>
            <NavLink to="#" target="_blank">LinkedIn</NavLink>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};
