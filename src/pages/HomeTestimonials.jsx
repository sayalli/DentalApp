/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    img: "https://plus.unsplash.com/premium_photo-1672922646298-3afc6c6397c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbnRpc3R8ZW58MHx8MHx8fDA%3D",
    name: "Eleanor Crisp",
    role: "About Dr.Eleanor Crisp",
    quote: "Exceptional care and expertise! The dentists here are truly professionals who ensure a comfortable and pain-free experience. Highly recommended!",
  },
  {
    img: "https://media.istockphoto.com/id/1680805041/photo/beautiful-indian-looking-nepali-dentist-doctor-girl-smiling-and-giving-gestures.webp?a=1&b=1&s=612x612&w=0&k=20&c=nGK0NSODhVl0huJVWPmY9hm-VDI4Zox5QCmn--y9BU0=",
    name: "Gordon Norman",
    role: "About Dr.Gordon Norman",
    quote: "From consultation to treatment, the process was seamless. The team is highly skilled, and their attention to detail is unmatched.",
  },
  {
    img: "https://media.istockphoto.com/id/1455851883/photo/dental-procedure-with-the-help-of-3d-tooth-scanner-technology.jpg?s=612x612&w=0&k=20&c=aZxnffoQ9pc3Hzpcbd_-glBoXvABAGnYrFQcJsqKpH0=",
    name: "Sue Shei",
    role: "About Dr.Sue Shei",
    quote: "A top-notch dental clinic with state-of-the-art equipment and a caring staff. I felt at ease throughout my treatment.",
  },
];

const ProfileCard = ({ img, name, role, quote }) => {
  return (
    <div className="profile-card">
      <img src={img} alt={name} className="profile-img" />
      <figcaption>
        <h2>{name}</h2>
        <h4 className="dentist-description">{role}</h4>
        <blockquote className="dentist-description">{quote}</blockquote>
      </figcaption>
    </div>
  );
};

const ProfileList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="profile-list">
      {/* Heading */}
      <div className="text-center">
        <h1 className="our-services">Testimonial</h1>
        <h3 className="testimony">Hear from our happy patients.</h3>
      </div>

      {/* Carousel */}
      <Slider {...settings} className="profiles-carousel">
        {testimonials.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </Slider>
    </section>
  );
};

export default ProfileList;
