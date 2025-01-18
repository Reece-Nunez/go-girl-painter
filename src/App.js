import logo from "./logo.png";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faBrush } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";



function App() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: "Decks",
      icon: <FontAwesomeIcon icon={faBrush} />,
      description: "We paint and stain decks for your outdoor space.",
    },
    {
      name: "Fences",
      icon: <FontAwesomeIcon icon={faBars} />, // Replace with custom SVG or other icon if preferred
      description:
        "Professional painting and staining for all types of fences.",
    },
    {
      name: "Exterior",
      icon: <FontAwesomeIcon icon={faHome} />,
      description: "Exterior painting to revitalize your home’s look.",
    },
    {
      name: "Interior",
      icon: <FontAwesomeIcon icon={faCouch} />,
      description:
        "High-quality interior painting tailored to your preferences.",
    },
    {
      name: "Cabinets",
      icon: <FontAwesomeIcon icon={faSquare} />,
      description: "Cabinet refinishing and painting for a modern touch.",
    },
    {
      name: "Wood Staining",
      icon: <FontAwesomeIcon icon={faTree} />,
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
        <h1 className="quote-title">Get Your Free Quote</h1>
        <p className="quote-text">Call or Text Us At:</p>
        <a href="tel:3333333333" className="quote-number">
          333-333-3333
        </a>
      </div>

      <div className="partners-section">
        <h1 className="partners-title">Our Trusted Partners</h1>
        <div className="partners-logos">
          <img
            src={process.env.PUBLIC_URL + "/images/partner.png"}
            alt="Partner Logo"
            className="partner-logo"
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Go-Girl Painting. All rights reserved.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100083751551269"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/facebook-icon.png"}
              alt="Facebook"
              className="footer-icon"
            />
            Visit us on Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
