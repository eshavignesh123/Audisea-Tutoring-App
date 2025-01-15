import '../../styles/Home.css';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState();
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    async function grabData() {
      const response = await axios.get('http://localhost:4000/tutors');
      if (response.status === 200) {
        setData(response.data);
      }
    }
    grabData();
  }, []);

  return (
    <div>
      <div id="home-page" className="App-Home">
        <header>
          <img src="audisea-transparent-logo.png" alt="Logo" />
          <nav className="navigation-links">
            <a className="page-links" href="#home-page">Home</a>
            <a className="page-links" href="#about-page">About</a>
            <a className="page-links" href="#services-page">Services</a>
            <a className="page-links" href="#contact-page">Contact</a>
          </nav>
          {!authToken ? (
            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Join Today!
              </a>
              <ul className="dropdown-menu">
                <Link to="/login" className="dropdown-item"><li>Login</li></Link>
                <Link to="/signup" className="dropdown-item"><li>Sign Up</li></Link>
              </ul>
            </div>
          ) : (
            <Link to="/dashboard"><button>Dashboard</button></Link>
          )}
        </header>

        <div className="main-content">
          <h1>Audisea Tutoring</h1>
          <h3>Private tutoring by passionate people.</h3>
          <a href="#about-page">
            <img src="arrow-down.png.png" alt="Scroll down" />
          </a>
        </div>
      </div>

      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
