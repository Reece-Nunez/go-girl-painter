import logo from "./logo.png";
import { Helmet } from "react-helmet";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faPaintRoller,
  faCouch,
  faSquare,
  faTree,
  faBrush,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import createdLogo from "./assets/images/reece-nunez-high-resolution-logo-transparent.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeService, setActiveService] = useState(null);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Slightly faster for snappier feel
      easing: "ease-in-out", // Smooth natural motion
      once: true, // Animate only once
      mirror: false, // No reverse animation
      offset: 100, // Trigger a bit earlier
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
    "https://go-girl-images-bucket.s3.us-east-1.amazonaws.com/images/commercial1.png",
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
    speed: 900, // Transition speed
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

  const handleGetQuoteClick = () => {
    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "Button",
        event_label: "Get A Quote",
      });
    }
    document
      .getElementById("quote-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Go-Girl Painting | Omaha's Best Commercial & Residential Painters</title>
        <meta 
          name="description" 
          content="Professional interior and exterior painting services in Omaha, NE. Get your free quote today from Go-Girl Painting!" 
        />
        <meta 
          name="keywords" 
          content="Omaha painting services, commercial painting, residential painting, interior painting, exterior painting, Go-Girl Painting"
        />
        <link rel="canonical" href="https://go-girlpainting.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Go-Girl Painting | Expert Painting Services in Omaha, NE" />
        <meta property="og:description" content="Transform your home or business with top-rated painting services." />
        <meta property="og:image" content="https://go-girlpainting.com/assets/images/commercial-header.jpg" />
        <meta property="og:url" content="https://go-girlpainting.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omaha's Trusted Painting Experts | Go-Girl Painting" />
        <meta name="twitter:description" content="Contact us today for professional painting services." />
        <meta name="twitter:image" content="https://go-girlpainting.com/assets/images/commercial-header.jpg" />
      </Helmet>
      
      {/* Sticky CTA for Mobile */}
      {isMobile && (
        <a href="#quote-section" className="sticky-cta">
          Get A Quote
        </a>
      )}
      <header
        className={`nav-bar ${isShrunk ? "shrink" : ""}`}
        aria-label="Main Navigation"
      >
        <a
          href="#top"
          className="logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} className="App-logo" alt="Go-Girl Painting logo" />
        </a>
        {isMobile ? (
          <div className="hamburger-menu">
            <button
              className={`hamburger-button ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
            <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>
              <a href="#services-section">Services</a>
              <a href="#gallery-section">Gallery</a>
              <a href="#quote-section">Get a Quote</a>
              <a href="#reviews-section">Reviews</a>
            </div>
          </div>
        ) : (
          <nav>
            <ul className="links">
              <li className="nav-item">
                <a
                  href="#services-section"
                  aria-label="Jump to Services section"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#gallery-section" aria-label="Jump to Gallery section">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#quote-section"
                  aria-label="Jump to Get a Quote section"
                >
                  Get a Quote
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#reviews-section"
                  aria-label="Jump to Customer Reviews"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="page-wrap">
        <section
          className="hero-section"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1200"
        >
          <h1 className="hero-title">Welcome to Go Girl Painting!</h1>

          <div className="hero-images-wrapper">
            <div
              className="hero-image"
              id="hero-image-left"
              aria-label="Commercial painting services"
            >
              <div className="hero-text">
                <h2>Commercial Painting Services</h2>
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

            <div
              className="hero-image"
              id="hero-image-right"
              aria-label="Residential painting services"
            >
              <div className="hero-text">
                <h2>Residential Painting Services</h2>
                <button className="brush-button" onClick={handleGetQuoteClick}>
                  Get A Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="services-section"
          id="services-section"
          data-aos="fade-up"
        >
          <h2 className="services-title">Our Services</h2>

          <ul className="services-list">
            {services.map((service, index) => (
              <li
                key={index}
                class="service-item"
                onClick={() => toggleService(index)}
                role="button"
                tabIndex={0}
                aria-expanded={activeService === index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="true"
              >
                <div className="service-icon">{service.icon}</div>
                <p className="service-name">{service.name}</p>
                {activeService === index && (
                  <p className="service-description">{service.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section
          className="gallery-section"
          id="commercial-gallery"
          data-aos="fade-right"
        >
          <h2 className="gallery-title">Commercial Work</h2>
          <div className="carousel-container">
            <Slider {...sliderSettings}>
              {commercialImages.map((pic, index) => (
                <div key={index} className="slide">
                  <img
                    src={pic}
                    alt={`Commerical painting project ${index + 1}`}
                    loading="lazy"
                    className="gallery-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section
          className="gallery-section"
          id="residential-gallery"
          data-aos="fade-left"
        >
          <h2 className="gallery-title">Residential Work</h2>
          <div className="carousel-container">
            <Slider {...sliderSettings}>
              {resedentialImages.map((pic, index) => (
                <div key={index} className="slide">
                  <img
                    src={pic} // Use the full URL here
                    alt={`Residential painting project ${index + 1}`}
                    loading="lazy"
                    className="gallery-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div id="quote-section"></div>
        </section>

        <section
          id="quote-section"
          className="quote-section"
          data-aos="zoom-in-up"
        >
          <h2 className="quote-title">Get Your Free Quote</h2>
          <p className="quote-text">Email, Call, or Text Missy At:</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <a href="tel:402-303-2541" className="quote-number">
              Phone: 402-303-2541
            </a>
            <a
              href="mailto:go-girlpainting@outlook.com"
              className="quote-number"
            >
              Email: go-girlpainting@outlook.com
            </a>
          </div>
        </section>

        <section
          id="reviews-section"
          className="reviews-section"
          data-aos="fade-up"
          itemScope
          itemType="https://schema.org/Review"
        >
          <div className="reviews">
            <h3 id="reviews" itemProp="name">
              Customer Reviews:
            </h3>
            <Slider {...sliderSettings} className="review-slider">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="review"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <p className="review-text" itemProp="reviewBody">
                    "{review.text}"
                  </p>
                  <p
                    className="review-name"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    - <span itemProp="name">{review.name}</span>
                  </p>
                  <p className="review-property">{review.property}</p>
                  <meta
                    itemProp="reviewRating"
                    content={review.rating.toString()}
                  />
                  <div className="review-stars">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </Slider>
            <p className="review-note">*Reviews from Facebook</p>
          </div>
        </section>

        <section className="partners-section" data-aos="flip-left">
          <h2 className="partners-title">Our Trusted Partners</h2>
          <div className="partners-logos">
            <a href="https://brand.page/profixandbuildllc">
              <img
                src={process.env.PUBLIC_URL + "/images/partner.png"}
                alt="Pro Fix and Build Partner Logo"
                className="partner-logo"
              />
            </a>
          </div>
          <p className="partner-name">Michael Hohlfeld</p>
          <a href="tel:402-705-9513" className="quote-number">
            402-705-9513
          </a>
        </section>
      </main>

      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
          <br />
          <div className="top">Top</div>
        </button>
      )}

      <footer className="footer" data-aos="fade-down" data-aos-delay="200">
        <div className="footer-content">
          <nav className="footer-links">
            <a href="#services-section">Services</a>
            <a href="#gallery-section">Gallery</a>
            <a href="#quote-section">Get a Quote</a>
            <a href="#reviews-section">Reviews</a>
          </nav>

          <div className="contact-info">
            <a href="tel:402-303-2541">
              <i className="fas fa-phone-alt"></i> 402-303-2541
            </a>
            <a href="mailto:go-girlpainting@outlook.com">
              <i className="fas fa-envelope"></i> go-girlpainting@outlook.com
            </a>
          </div>

          <div className="social-media">
            <a
              href="https://www.facebook.com/profile.php?id=100083751551269"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook-icon.png" alt="Facebook" />
            </a>
          </div>

          <p className="footer-text">
            © {new Date().getFullYear()} Go-Girl Painting LLC. All rights
            reserved.
          </p>

          <div className="created-by">
            <p>Website by NunezDev</p>
            <a
              href="https://www.nunezdev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={createdLogo}
                alt="NunezDev Logo"
                className="createdLogo"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
