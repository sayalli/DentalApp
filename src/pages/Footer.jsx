import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
const Footer = () => {
  const otherLinks = [
    "Home",
    "About Us",
    "Services",
    "Project",
    "Our Team",
    "Latest Blog"
  ];
  const services = [
    "Root Canal",
    "Alignment Teeth",
    "Cosmetic Teeth",
    "Oral Hygiene",
    "Live Advisory",
    "Cavity Inspection"
  ];
  const contactDetails = [
    { icon: "📍", text: "123 Kolhapur, Maharashtra, India" },
    { icon: "📞", text: "+99 1234567890" },
    { icon: "✉️", text: "Sayali.pawar@SayaliPawar.com" }
  ];
  const socialLinks = [
    { icon: "fa-brands fa-facebook", link: "#" },
    { icon: "fa-brands fa-instagram", link: "#" },
    { icon: "fa-brands fa-twitter", link: "#" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Dental Clinic</h2>
          <p>Kolhapur-Maharashtra-India, Kolhapur-Maharashtra-India,</p>
          <p>🕒 Monday - Saturday: 9:00am - 10:00pm</p>
        </div>

        <div className="footer-links">
          <h3>Other Links</h3>
          <ul>
            {otherLinks.map((link, index) => (
              <li key={index}>
                <i className="fa-solid fa-plus footer-plus-icon"></i> {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <i className="fa-solid fa-plus footer-plus-icon"></i> {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          {contactDetails.map((item, index) => (
            <p key={index}>
              <span>{item.icon}</span> {item.text}
            </p>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.link}>
            <i className={`${social.icon} footer-icon`}></i>
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 Dental Clinic All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
