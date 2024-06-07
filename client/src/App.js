// App.js
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login'
import Alumniform from './components/Alumniform';
import Admin from './components/Admin';
import Alumnis  from './components/Alumnis';
import Events from './components/Events';
import Contact from './components/Contact';
import News from './components/News';

function App() {
  const [loggedin, setLoggedin]= useState(false);
  const [adminloggedin, setAdminloggedin] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <Router>
      <div className="App ">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: Math.random()
            }}
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
        {(!loggedin && !adminloggedin) && <Navbar />}
        {(!loggedin && !adminloggedin) && 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login"  element={<Login setLoggedin={setLoggedin} setAdminloggedin={setAdminloggedin} setUserId={setUserId}/>}/>
          <Route path="/alumni" element={<Alumnis/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/news" element={<News/>} />
        </Routes>
        }
        
        {loggedin && <Alumniform userId={userId} setLoggedin={setLoggedin}/>} 
        {adminloggedin && <Admin setAdminloggedin={setAdminloggedin}/>}  
      </div>
    </Router>
  );
}

export default App;
