const EnquiryForm = () => {
  const enquirySections = ["Name", "Email", "Phone", "Message"];

  return (
    <div className="enquiry-wrapper">
      <div className="enquiry-container">
        {enquirySections.map((placeholder, index) => (
          <input key={index} className="form-fields" placeholder={placeholder} />
        ))}
        <button type="submit" className="book-appointment-btn">Submit</button>
      </div>
    </div>
  );
};

export default EnquiryForm;
