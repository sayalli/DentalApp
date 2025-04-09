// import aboutImg from "../assets/aboutImg.png";

const AboutTextSection = () => {
  return (
    <>
      <section className="image-text-section">
        {/* Image */}
        <div className="image-container">
          <img
            src={
              "https://estheticabroad.com/wp-content/uploads/2024/02/aesthetic-dentistry-scaled.jpg"
            }
            alt="Dental Care"
          />
        </div>

        {/* Text Description */}
        <div className="text-container">
          <h2>We Care About Your Dental Health</h2>
          <p>
            Our team of experienced professionals is committed to providing
            high-quality dental care with advanced technology and personalized
            treatment.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </section>
    </>
  );
};
export default AboutTextSection;
