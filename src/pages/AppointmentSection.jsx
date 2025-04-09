import "./AppointmentSection.css";
const appointmentData = {
  title: "Committed to Your Dental Health ",
  subtitle: "Schedule a Visit!",
  buttonText: "Book an Appointment!",
  imageUrl: "/path-to-your-image.jpg"
};

const AppointmentSection = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <h4 className="appointment-subtitle">{appointmentData.subtitle}</h4>
        <h1 className="appointment-title">{appointmentData.title}</h1>
        <button className="appointment-button">
          {appointmentData.buttonText}
        </button>
      </div>
      <div className="appointment-image">
        <img
          src={
            "https://marinasidedental.com/wp-content/themes/www.marinasidedental.com/marinaside-dental/files/2023/12/cosmetic-dentistry-to-enhance-your-smile-with-aesthetic-dental-procedures.jpg"
          }
          alt="Dentist"
        />
      </div>
    </div>
  );
};
export default AppointmentSection;
