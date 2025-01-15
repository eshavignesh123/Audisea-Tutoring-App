import '../../styles/Signup.css';
import { Link, useLocation } from 'react-router-dom';

function Signup(){


  return(
    
    <div className = "Signup">

      <div class = "sign-up-box">
        <div className = "upper">
          <h1 class = "head-text">
            Sign Up
          </h1>
          <Link to="/">
            <button className = "back-button">Go back</button>
          </Link>

        </div>
        
        <div class = "slight-underline"></div>
        <div class = "sign-up-form">
          <input required type = "text" placeholder = "Enter your first name"></input>
          <input required type = "text" placeholder = "Enter your last name"></input>
          <input required type = "email" placeholder = "Enter your email"></input>
          <input required type = "password" placeholder = "Enter your password"></input>
          <input required type = "password" placeholder = "Confirm your password"></input>

          <label>Are you a tutor or client?</label>
          <div className = "type-selection">
            <div className = "radio-selection">
              <input
                type="radio"
                value="option1"
                name="radio"
              />
              <span className="text-lg">Tutor</span>

            </div>
            <div className = "radio-selection">
              <input
                type="radio"
                value="option1"
                name="radio"
              />
              <span className="text-lg">Client</span>

            </div>

          </div>
            

          <div>
            <button type = "submit">
              Submit
            </button>
            <a>Already have an account?</a>


          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Signup;
