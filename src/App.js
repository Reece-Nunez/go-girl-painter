import logo from "./logo.png";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function App() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: "Decks",
      icon: "🪵",
      description: "We paint and stain decks for your outdoor space.",
    },
    {
      name: "Fences",
      icon: "🏡",
      description:
        "Professional painting and staining for all types of fences.",
    },
    {
      name: "Exterior",
      icon: "🏠",
      description: "Exterior painting to revitalize your home’s look.",
    },
    {
      name: "Interior",
      icon: "🛋️",
      description:
        "High-quality interior painting tailored to your preferences.",
    },
    {
      name: "Cabinets",
      icon: "🗄️",
      description: "Cabinet refinishing and painting for a modern touch.",
    },
    {
      name: "Wood Staining",
      icon: "🌲",
      description:
        "Premium wood staining to protect and enhance your wood surfaces.",
    },
  ];

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index); // Toggle the clicked service
  };

  const galleryImages = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.jpg",
    "pic10.jpg",
    "pic11.jpg",
    "pic12.jpg",
    "pic13.jpg",
    "pic14.jpg",
    "pic15.jpg",
    "pic16.jpg",
    "pic17.jpg",
  ];

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 images at a time (center + 2 sides)
    slidesToScroll: 1, // Scroll one image at a time
    centerMode: true, // Center focus mode
    centerPadding: "0", // No padding around the center slide
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1, // Show only one image on smaller screens
        },
      },
    ],
  };

  return (
    <div className="App">
      <header className="nav-bar">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="links">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </header>
      <div className="hero-section">
        <p className="title-paragraph">Commercial & Residential</p>
        <h1 className="title">Painting Services</h1>
        <button className="brush-button">Get A Quote</button>
      </div>
      <div className="services-section">
        <h1 className="services-title">Our Services</h1>
        <ul className="services-list">
          {services.map((service, index) => (
            <li
              key={index}
              className="service-item"
              onClick={() => toggleService(index)}
            >
              <div className="service-icon">{service.icon}</div>
              <p className="service-name">{service.name}</p>
              {activeService === index && (
                <p className="service-description">{service.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery-section">
        <h1 className="gallery-title">Gallery Of Our Work</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {galleryImages.map((pic, index) => (
              <div key={index} className="slide">
                <img
                  src={`/images/${pic}`}
                  alt={`Work ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="quote-section">
        <h1>To Get A Quote Call Or Text:</h1>
        <p>333-333-3333</p>
      </div>
      <div className="partners">
        <h1>Our Partners</h1>
        <div className="partners-logos">
          <img
            src={process.env.PUBLIC_URL + "/images/partner.png"}
            alt="partner image"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
