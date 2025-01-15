import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"

import { useState } from 'react';
import '../../styles/Login.css';

// Initial password given to users and they canc hange it after logging in. 

function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      console.log(email, password);

      const response = await axios.post('http://localhost:4000/api/auth/login', 
        { email, password},
    );

      localStorage.setItem("authToken", response.data.token);

      navigate("/dashboard");

    }
    catch(err){
      setError("Invalid username or password.")
    }
  }



  return(
    
    <div className = "Login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>{error}</p>

        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" onChange = {(e) => setEmail(e.target.value)}></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" onChange = {(e) => setPassword(e.target.value)}></input>
          </div>
        </div>

        <div>
            <button class = "btn btn-primary log-in" type = "submit">
              Sign in
            </button>
            <Link to = "/">Go back home</Link>
        </div>      
      </form>
    </div>

  )
}

export default Login;
