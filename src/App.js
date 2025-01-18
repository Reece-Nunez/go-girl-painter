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
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faPaintRoller } from "@fortawesome/free-solid-svg-icons";



function App() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: "Commercial",
      icon: <FontAwesomeIcon icon={faBuilding} />,
      description: "Professional painting services tailored for offices, retail spaces, and commercial properties.",
    },
    {
      name: "Residential",
      icon: <FontAwesomeIcon icon={faHome} />,
      description: "Transform your home with expert interior and exterior painting services.",
    },
    {
      name: "Exterior",
      icon: <FontAwesomeIcon icon={faPaintRoller} />,
      description: "High-quality exterior painting to enhance the beauty and durability of your property.",
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
  ];

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index); // Toggle the clicked service
  };

  const commercialImages = [
    
    "commercial1.jpg",
    "commercial2.jpg",
    "commercial3.jpg",
    "commercial4.jpg",
    
  ];

  const resedentialImages = [
    
    "residential1.jpg",
    "residential2.jpg",
    "residential3.jpg",
    "residential4.jpg",
    "residential5.jpg",

  ]

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
            <a href="#services-section">Services</a>
          </li>
          <li className="nav-item">
            <a href="#gallery-section">Gallery</a>
          </li>
        </ul>
      </header>
      <div className="hero-section">
        <p className="title-paragraph">Commercial & Residential</p>
        <h1 className="title">Painting Services</h1>
        <button
          className="brush-button"
          onClick={() =>
            document
              .getElementById("quote-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Get A Quote
        </button>{" "}
      </div>
      <div className="services-section" id="services-section">
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
      <div className="gallery-section" id="gallery-section">
        <h1 className="gallery-title">Commercial Work</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {commercialImages.map((pic, index) => (
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
      <div className="gallery-section" id="gallery-section">
        <h1 className="gallery-title">Resedential Work</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {resedentialImages.map((pic, index) => (
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
      <div className="quote-section" id="quote-section">
        <h1 className="quote-title">Get Your Free Quote</h1>
        <p className="quote-text">Call or Text Us At:</p>
        <a href="tel:402-303-2541" className="quote-number">
        402-303-2541
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
        <p className="partner-name">Micheal Hohlfeld</p>
        <a href="tel:402-705-9513" className="quote-number">
        402-3705-9513
        </a>
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
