import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Shows 3 carouselCards in one view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true, // Ensures carouselCards are always centered
    centerPadding: "0", // Removes side gaps
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: false }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };

  const carouselCards = [
    {
      title: "Teeth Whitening",
      description:
        "Brighten your smile with our professional teeth whitening services, giving you a dazzling, confident smile that lasts."
    },
    {
      title: "Dental Implants",
      description:
        "Restore your smile with dental implants that look and feel natural, providing long-lasting solutions for missing teeth."
    },
    {
      title: "Orthodontics",
      description:
        "Achieve a perfect smile with our orthodontic treatments, including braces and aligners, tailored to your needs."
    },
    {
      title: "Root Canal Therapy",
      description:
        "Get relief from tooth pain and preserve your natural tooth with our gentle root canal treatments."
    },
    {
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with cosmetic procedures like veneers, bonding, and contouring, customized to suit your facial features."
    },
    {
      title: "Preventive Care",
      description:
        "Maintain a healthy smile with regular check-ups, cleanings, and preventive treatments that help you avoid future dental problems."
    }
  ];

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {carouselCards.map((currentCard, index) => (
          <div key={index} className="carouselCard">
            <blockquote>{currentCard.title}</blockquote>
            <h2 className="dentist-description">{currentCard.description}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


