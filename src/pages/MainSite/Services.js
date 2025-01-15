import ServicesComp from '../../components/ServicesComp';
import '../../styles/Services.css';


function Services(){
  return(
    <div id = "services-page" className="App-Services">
      <div className = "main-content-services">
        <h2>Services</h2>
        <div className = "services-container">
          <ServicesComp imgURL = "sat.png.png" name = "sat" title = "SAT Preparation" description = "The SAT is a standardized test widely used by many colleges and universities to make admission decisions. Our tutors have experience taking this test and can help your student too!"></ServicesComp>
          <ServicesComp imgURL = "act.png.png"  name = "act" title = "ACT Preparation" description = "The ACT is a standardized test that compares you to other high school students to gauge your level of readiness for college. Our tutors can help you prepare for this test!"></ServicesComp>
          <ServicesComp imgURL = "stem.png.png"  name = "stem" title = "STEM Subjects" description = "Whether it be math or physics, our tutors have experience in all sorts of STEM classes. We have experience taking all levels of classes and are willing to hlp your student today!"></ServicesComp>
        </div>

        <h3 className = "services-h3">Have a specific request?</h3>
        <button className= "services-contact">Contact Us</button>
        
      </div>

    </div>
  )
}

export default Services;