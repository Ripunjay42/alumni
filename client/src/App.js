// App.js
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login'
import Alumniform from './components/Alumniform';
import Admin from './components/Admin';
import Alumnis  from './components/Alumnis';
import Events from './components/Events';

function App() {
  const [loggedin, setLoggedin]= useState(false);
  const [adminloggedin, setAdminloggedin] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div className="App">
        {(!loggedin && !adminloggedin) && <Navbar />}
        {(!loggedin && !adminloggedin) && 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"  element={<Login setLoggedin={setLoggedin} setAdminloggedin={setAdminloggedin} setUserId={setUserId}/>}/>
          <Route path="/alumni" element={<Alumnis/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>
        }
        
        {loggedin && <Alumniform userId={userId} setLoggedin={setLoggedin}/>} 
        {adminloggedin && <Admin setAdminloggedin={setAdminloggedin}/>}  
      </div>
    </Router>
  );
}

export default App;
