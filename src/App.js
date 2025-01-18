import logo from "./logo.png";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const galleryImages = [
    "pic1.JPG",
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
    "pic14.JPG",
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
          <li className="service-item">Decks</li>
          <li className="service-item">Fences</li>
          <li className="service-item">Exterior</li>
          <li className="service-item">Interior</li>
          <li className="service-item">Cabinets</li>
          <li className="service-item">Wood Staining</li>
        </ul>
      </div>
      <div className="gallery-section">
        <h1 className="gallery-title">Gallery Of Our Work</h1>
        <div className="carousel-container">
          <Slider {...settings}>
            {galleryImages.map((pic, index) => (
              <div key={index} className="slide">
                <img
                  src={process.env.PUBLIC_URL + `/images/${pic}`}
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
