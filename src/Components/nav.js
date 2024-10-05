import React ,{useState} from "react";

import './nav.css';
import Login from "./login";
import { BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom';
import Footer from "./footer";
import Home from "./home";
import Contact from "./contact";
import Team from "./team";
import News from "./news";
import Buy from "./buy";
import Rent from "./rent";
import All from "./all-prop";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Router>
      <nav className={isScrolled ? 'nav scrolled' : 'nav'} >
        <img src=".././images/logo.png"height="40px" width="100px" alt="img"/>
        <p>AYVAN <span className="logo">PROPERTIES</span></p>
        <ul>
          <li ><NavLink className='link' to="/">Home</NavLink></li>
          <li className="dropdown">
              <NavLink className='link' to="/all" aria-haspopup="true">Properties</NavLink>
              <ul className="dropdown-content">
                <li><NavLink className='dropdown-link' to="/all">All Properties</NavLink></li>
                <li><NavLink className='dropdown-link' to="/buy">Buy</NavLink></li>
                <li><NavLink className='dropdown-link' to="/rent">Rent</NavLink></li>
                {/* Add more dropdown items as needed */}
              </ul>
            </li>
          <li><NavLink className='link' to="/news">News</NavLink></li>
          <li><NavLink className='link' to="/team">Team</NavLink></li>
          <li><NavLink className='link' to="/contact">Contact</NavLink></li>
          <li ><NavLink className='link' to="/login">Login</NavLink></li>
        </ul>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/all" element={<All />} />
        
        
      </Routes>
  
      </Router>
    </>
  );
}

export default Nav;
