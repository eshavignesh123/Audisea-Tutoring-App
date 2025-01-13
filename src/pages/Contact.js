import '../styles/Contact.css';

function Contact(){
  return(
    <div id = "contact-page" className = "App-Contact">
      <div className = "main-content-contact">
        <h2>Contact</h2>
        <form>
          <input type = "text" placeholder='Enter Name'></input>
          <input type = "email" placeholder='Enter email'></input>
          <textarea placeholder='Enter message'></textarea>

          <button className= "contact-button">Submit</button>



        </form>

        
      </div>

    </div>

  )
}

export default Contact;
