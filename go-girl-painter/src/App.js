import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav-bar">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className='links'>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
      </header>
      <div className="hero-section">
        <p className="title-paragraph">Commercial & Residential</p>
        <h1 className="title">Painting Services</h1>
        <button className="brush-button">Get A Quote</button>
      </div>
    </div>
  );
}

export default App;
