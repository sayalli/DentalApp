import { useState } from "react";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Frequently Asked Questions",
    "Frequently Asked Questions",
    "Frequently Asked Questions",
    "Frequently Asked Questions"
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h6 className="faq-title">FAQ</h6>
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {question}
                <span
                  className={`faq-icon ${openIndex === index ? "rotate" : ""}`}
                >
                  ◄
                </span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  This is the answer to the question.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="faq-image">
        <img
          src={
            "https://www.wockhardthospitals.com/wp-content/uploads/2023/05/Treatment-Image-16.png"
          }
          alt="Dental Checkup"
        />
      </div>
    </div>
  );
};

export default FAQ;
