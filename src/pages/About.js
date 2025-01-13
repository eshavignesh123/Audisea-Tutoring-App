import '../styles/About.css';

function About() {
  return(  
    <div id = "about-page" className="App-About">
      <div className = "main-content-about">
        <h2>About</h2>
        <div className = "main-inner-content-about">
          <div className = "audisea-about-picture">
            <img  src = "audisea_about_picture.jpg" width = "100px"></img>
          </div>
          <div className = "about-content">
            <h3>Ready to see your student soar?</h3>
            <p className = "about-content-paragraph">Audisea was founded by Audrey Lin, a career coach and tutor with 10+ years of
              experience. With a handful of talented tutors, she aims to specialize in high school
              test prep (SAT and ACT) and STEM subjects that range from math to physics.</p>
            <h3>Contact</h3>
            <div className = "contact-info">
              <img src = "Phone.png"></img>
              <p>+1 (808) 590 8087</p>
            </div>
            <div className = "contact-info">
              <img src = "mail.png"></img>
              <p>audiseatutoring@gmail.com</p>
            </div>
            <div className = "contact-info">
              <img src = "location_on.png"></img>
              <p>Newport Beach, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;