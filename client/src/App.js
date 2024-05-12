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

function App() {
  const [loggedin, setLoggedin]= useState(false);
  const [adminloggedin, setAdminloggedin] = useState(false);

  return (
    <Router>
      <div className="App">
        {(!loggedin && !adminloggedin) && <Navbar />}
        {(!loggedin && !adminloggedin) && 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"  element={<Login setLoggedin={setLoggedin} setAdminloggedin={setAdminloggedin}/>}/>
        </Routes>
        }
        
        {loggedin && <Alumniform/>} 
        {adminloggedin && <Admin/>}  
      </div>
    </Router>
  );
}

export default App;
