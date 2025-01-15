import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/MainSite/Home';

import Signup from './pages/MainSite/Signup';
import Login from './pages/MainSite/Login';

import PrivateRoute from './pages/PrivateRoute';
import DefaultRoute from './pages/DefaultRoute';

import Dashboard from './pages/UserSite/AdminDashboard';


function App() {
  return ( 
    // Next SAT Date/ACT: banner at the top
    // Learn more about the SAT pages
    
    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
      </style>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<DefaultRoute />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/addTutors" element={<Dashboard />} />

          </Route>
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
