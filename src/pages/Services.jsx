
import "./Service.css";
import EnquiryForm from "./HomeEnquirySection";
import ProfileList from "./HomeTestimonials";
import PlanCards from "./HomePlanCards";

const services = [
  {
    id: 1,
    title: "Teeth Whitening",
    description: "Brighten your smile with our professional teeth whitening services.",
    icon: "🦷", // You can replace this with an image URL
  },
  {
    id: 2,
    title: "Braces & Aligners",
    description: "Get perfectly aligned teeth with our modern braces and aligners.",
    icon: "😁",
  },
  {
    id: 3,
    title: "Dental Implants",
    description: "Replace missing teeth with high-quality dental implants.",
    icon: "⚕️",
  },
  {
    id: 4,
    title: "Gum Care",
    description: "Specialized gum care treatments for healthy gums.",
    icon: "🩺",
  },
  {
    id: 5,
    title: "Emergency Care",
    description: "24/7 emergency dental care for all urgent dental needs.",
    icon: "🚑",
  },
  {
    id: 6,
    title: "Kids Dentistry",
    description: "Gentle and caring dental treatments for children.",
    icon: "👶",
  },
];

const ServicesCards = () => {
  return (
    <><div className="about-container">
      <img src={'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnl6qGkxVKFMG0QN/blue-simple-love-your-teeth-instagram-post-1500-x-1080-piksel-azerice-1-AQE4wZ2xQZhg4lLQ.jpg'} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>Services</h1>
        <h2>Home | Services</h2>
      </div>
    </div><div className="services-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <EnquiryForm/>
      <ProfileList/>
<PlanCards/>
      </>
  );
};

export default ServicesCards;
