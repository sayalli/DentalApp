
import './AboutUs.css';
import AboutTextSection from './AboutText-section';
import AppointmentSection from './AppointmentSection';
import CustomCarousel from './HomeCarousel';
import FAQ from './FaQs';
import AppointmentCards from './AppointmentCards';
function AboutUs() {
  return (
    <><div className="about-container">
      <img src={'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mnl6qGkxVKFMG0QN/blue-simple-love-your-teeth-instagram-post-1500-x-1080-piksel-azerice-1-AQE4wZ2xQZhg4lLQ.jpg'} alt="About Us" className="about-image" />
      <div className="about-text">
        <h1>About Us</h1>
        <h2>Home | About Us</h2>
      </div>
    </div>
    <AboutTextSection/>
    <AppointmentSection/>
    <CustomCarousel/>
    <FAQ/>
    <AppointmentCards/>
</>
  );
}

export default AboutUs;
