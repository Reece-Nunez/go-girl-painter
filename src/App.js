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
import { useEffect } from "react";
import createdLogo from "./assets/images/reece-nunez-high-resolution-logo-transparent.svg";
import AOS from "aos";

function App() {
  const [activeService, setActiveService] = useState(null);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: true, // Only animate once per element
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true); // Shrink navbar
      } else {
        setIsShrunk(false); // Reset navbar
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reviews = [
    {
      name: "Tiffany-Joel Tilton",
      text: "Just hired Missy at Go-Girl Paintings LLC for my home (interior paint). She did a fantastic job!! Seriously can’t say enough good about it. She was priced right, fast, and the work was perfection!! My home looks amazing!!  Thank you Missy!! 😍",
      rating: 5,
    },
    {
      name: "Kay Sommerfeld",
      text: "Missy is an experienced Professional painter.  She dedicates herself to the job at hand. My kitchen was built in 1935 and I have a NEW kitchen.  I highly recommend Missy!",
      rating: 5,
    },
    {
      name: "Devin Marks",
      text: "We were introduced to Missy through mutual friends for a large job that we needed to complete. Missy came and gave a fair assessment and bid. Missy not only completed the entire project on time she shared her design eye with us to make sure that we used the correct color combinations. The job had some very difficult aspects to it but she delivered on all her promises, and it was a pleasure to work with her. I would recommend Missy to anyone that needs a painting project completed.",
      rating: 5,
    },
    {
      name: "Kasey Ann",
      text: "I’d highly recommend Go-Girl Painting, Missy was very nice to work with when it came time to paint our homes exterior. She provided excellent communication from the very start, and worked to fit us in at the last minute on Father’s Day! She was so kind to my curious 7 year old who wanted to watch her work and even got to do some painting. Very reasonable and upfront pricing and quality work. We love the way our home looks!",
      rating: 5,
    },
    {
      name: "Diana Greenblatt-Seay",
      text: "We hired Go-Girl Paintings to paint our whole basement, including a bathroom, laundry room, bedroom, family room and stairway, including ceilings. The work was exceptional, quick and very reasonably priced. Communication and coordination was also a great experience. We highly recommend using Go-Girl Paintings!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  const services = [
    {
      name: "Commercial",
      icon: <FontAwesomeIcon icon={faBuilding} />,
      description:
        "Professional painting services tailored for offices, retail spaces, and commercial properties.",
    },
    {
      name: "Residential",
      icon: <FontAwesomeIcon icon={faHome} />,
      description:
        "Transform your home with expert interior and exterior painting services.",
    },
    {
      name: "Exterior",
      icon: <FontAwesomeIcon icon={faPaintRoller} />,
      description:
        "High-quality exterior painting to enhance the beauty and durability of your property.",
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
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial3.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial4.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial5.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial6.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial7.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial8.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial9.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial12.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial13.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial17.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial18.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial19.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial20.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial21.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial24.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial26.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial29.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial31.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-stairs.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-stairs2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/com-ceiling.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/hallway.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/school.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/trophy-case.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/trophy-case2.jpg",
  ];

  const resedentialImages = [
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential3.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential4.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential5.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential6.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential7.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential8.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential9.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential10.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential11.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential12.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential13.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential14.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential15.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential16.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential17.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential18.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential19.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential20.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential21.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential22.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential23.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential30.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential24.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential25.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential26.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential27.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential28.png",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential29.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential31.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential32.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential33.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential34.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential35.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential36.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/residential37.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/deck2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet1.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet2.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet3.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet4.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/cabinet5.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-room.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/res-closet.jpg",
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/brown-house.jpg",

  ];

  const sliderSettings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Change slides every 3 seconds
    centerMode: true, // Optional: Center focus
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
      <header className={`nav-bar ${isShrunk ? "shrink" : ""}`}>
        <a
          href="#top"
          className="logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
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
        <div className="hero-image" id="hero-image-left">
          <div className="hero-text">
            <h1>Commercial Painting Services</h1>
            <button
              className="brush-button"
              onClick={() =>
                document
                  .getElementById("quote-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get A Quote
            </button>
          </div>
        </div>
        <div className="hero-image" id="hero-image-right">
          <div className="hero-text">
            <h1>Residential Painting Services</h1>
            <button
              className="brush-button"
              onClick={() =>
                document
                  .getElementById("quote-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get A Quote
            </button>
          </div>
        </div>
      </div>

      <div
        className="services-section"
        id="services-section"
        data-aos="fade-up"
      >
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
      <div className="gallery-section" id="gallery-section" data-aos="fade-out">
        <h1 className="gallery-title">Commercial Work</h1>
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {commercialImages.map((pic, index) => (
              <div key={index} className="slide">
                <img
                  src={pic} // Use the full URL here
                  alt={`Work ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div
        className="gallery-section"
        id="gallery-section"
        data-aos="fade-right"
      >
        <h1 className="gallery-title">Residential Work</h1>
        <div className="carousel-container">
          <Slider {...sliderSettings}>
            {resedentialImages.map((pic, index) => (
              <div key={index} className="slide">
                <img
                  src={pic} // Use the full URL here
                  alt={`Work ${index + 1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div id="quote-section"></div>
      </div>

      <div className="quote-section" data-aos="fade-up">
        <h1 className="quote-title">Get Your Free Quote</h1>
        <p className="quote-text">Call or Text Missy At:</p>
        <a href="tel:402-303-2541" className="quote-number">
          402-303-2541
        </a>
      </div>

      <section className="reviews-section">
        <div className="reviews">
          <h3 id="reviews">Customer Reviews:</h3>
          <Slider {...sliderSettings} className="review-slider">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p className="review-text">"{review.text}"</p>
                <p className="review-name">- {review.name}</p>
                <p className="review-property">{review.property}</p>
                <div className="review-stars">{renderStars(review.rating)}</div>
              </div>
            ))}
          </Slider>
          <p className="review-note">*Reviews from Facebook</p>
        </div>
      </section>

      <div className="partners-section" data-aos="fade-in">
        <h1 className="partners-title">Our Trusted Partners</h1>
        <div className="partners-logos">
          <a href="https://brand.page/profixandbuildllc">
            <img
              src={process.env.PUBLIC_URL + "/images/partner.png"}
              alt="Partner Logo"
              className="partner-logo"
            />
          </a>
        </div>
        <p className="partner-name">Michael Hohlfeld</p>
        <a href="tel:402-705-9513" className="quote-number">
          402-705-9513
        </a>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="center-content">
            <p className="footer-text">
              © 2025 Go-Girl Painting LLC. All rights reserved.
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
          <div className="created-by">
            <p>Created by:</p>
            <div className="created-by-logo">
              <a href="https://www.nunezdev.com" target="_blank" rel="noopener noreferrer">
                <img src={createdLogo} className="createdLogo" alt="website creator logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
