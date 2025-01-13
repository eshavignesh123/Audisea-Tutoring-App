import '../styles/Home.css';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function Home() {
  return (
    <div>

      <div id="home-page" className="App-Home">
        <header>
          <img src="audisea-transparent-logo.png" alt="Logo" />
          {/* Internal navigation with anchor links */}
          <a href="#home-page">Home</a>
          <a href="#about-page">About</a>
          <a href="#services-page">Services</a>
          <a href="#contact-page">Contact</a>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </header>

        <div className="main-content">
          <h1>Audisea Tutoring</h1>
          <h3>Private tutoring by passionate people.</h3>
          {/* Scroll to About Section */}
          <a href="#about-page">
            <img src="arrow-down.png.png" alt="Scroll down" />
          </a>
        </div>

      </div>

      <About></About>
      <Services></Services>
      <Contact></Contact>

    </div>


  );
}

export default Home;
