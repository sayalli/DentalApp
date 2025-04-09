import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

// Main menu items
const mainMenuItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact-us", label: "Contact Us" },
  { to: "/find-a-doctor", label: "Find a Doctor" },
  { to: "/blog", label: "Blogs" },
  { to: "/booking", label: "Book an Appointment" }
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  // Close menu & dropdown after clicking a link
  const handleNavLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <span>Dental Clinic</span>
            <img
              src={
                "https://t4.ftcdn.net/jpg/03/02/68/11/360_F_302681154_9HOWdvGLtCKpfwO5B85yESszG7MfmlUl.jpg"
              }
              alt="Dental Clinic Logo"
            />
          </div>

          {/* Desktop & Mobile Menu */}
          <nav
            className={`nav-wrapper ${showMenu ? "menu-mobile" : "menu-web"}`}
          >
            <ul>
              {mainMenuItems.map((item, index) => (
                <li key={index} onClick={handleNavLinkClick}>
                  {item.label === "Book an Appointment" ? (
                    <NavLink to={item.to}>
                      <button className="book-appointment-btn">
                        {item.label}
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink to={item.to}>{item.label}</NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <div className="ham-menu">
            <button
              className="web-content-link"
              onClick={() => setShowMenu(!showMenu)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
