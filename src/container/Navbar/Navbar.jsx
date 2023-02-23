import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCaretUpFill, BsCaretDownFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';



const Navbar = ( {type} ) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <nav className="app__navbar">

      <Link to="/">
        <div className="app__navbar-logo" onClick={ () => window.scrollTo(0,0) } >
          <img src={images.gericht} alt="Gericht Logo" />
        </div>
      </Link>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/" onClick={ () => window.scrollTo(0,0) } >Home</Link></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        
        {
          type === 'home'
          ?
          <li className="p__opensans app__navbar-menu_wrapper" onClick={ () => setDisplayMenu(!displayMenu) }>
            {displayMenu ? <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretUpFill /></a> : 
              <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretDownFill /></a>}
            <div className="app__navbar-menu" style={ displayMenu ? {display: 'flex'} : {display: 'none'} }>
              <Link className='app__navbar-menu_menu-item' to="/dining" >Dining</Link>
              <Link className='app__navbar-menu_menu-item' to="/bar" >Bar</Link>
              <Link className='app__navbar-menu_menu-item' to="/dessert" >Dessert</Link>
            </div>
          </li>
          :
          <li className="p__opensans"><a href="#complete-menu">Menu</a></li>
        }

        <li className="p__opensans"><a href="#blogs">Blogs</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar-login">
        <div className="login-item"><a href="#login" className="p__opensans">Login</a></div>
        <div className="login-item"><a href="#register" className="p__opensans">Register</a></div>
        <div className="login-item"><a href="#booking" className="p__opensans">Book Table</a></div>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={32} onClick={ () => setToggleMenu(true) } />
      </div>

      {toggleMenu && window.innerWidth > 650 && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={32} className="overlay__close" onClick={ () => {setToggleMenu(false); setDisplayMenu(false);} } />
          <ul className="app__navbar-smallscreen_links">
            <li><Link to="/" onClick={ () => {setToggleMenu(false); window.scrollTo(0,0);} }>Home</Link></li>
            <li><a href="#about" onClick={ () => setToggleMenu(false) }>About</a></li>
            {
              type === 'home'
              ?
              <li className="p__opensans app__navbar-menu_wrapper" onClick={ () => setDisplayMenu(!displayMenu) }>
                {displayMenu ? <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretLeftFill /></a> : 
                  <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretRightFill /></a>}
                <div className="app__navbar-menu_smallscreen" style={ displayMenu ? {display: 'flex'} : {display: 'none'} }>
                  <Link className='app__navbar-menu_menu-item' to="/dining" >Dining</Link>
                  <Link className='app__navbar-menu_menu-item' to="/bar" >Bar</Link>
                  <Link className='app__navbar-menu_menu-item' to="/dessert" >Dessert</Link>
                </div>
              </li>
              :
              <li className="p__opensans"><a href="#complete-menu">Menu</a></li>
            }
            <li><a href="#blogs" onClick={ () => setToggleMenu(false) }>Blogs</a></li>
            <li><a href="#contact" onClick={ () => setToggleMenu(false) }>Contact</a></li>
          </ul>
        </div>
      )}

      {toggleMenu && window.innerWidth <= 650 && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={32} className="overlay__close" onClick={ () => {setToggleMenu(false); setDisplayMenu(false);} } />
          <ul className="app__navbar-smallscreen_links">
            <li><Link to="/" onClick={ () => {setToggleMenu(false); window.scrollTo(0,0);} }>Home</Link></li>
            <li><a href="#about" onClick={ () => setToggleMenu(false) }>About</a></li>
            {
              type === 'home'
              ?
              <li className="p__opensans app__navbar-menu_wrapper" onClick={ () => setDisplayMenu(!displayMenu) }>
                {displayMenu ? <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretLeftFill /></a> : 
                  <a className='app__navbar-menu_heading flex__center'>Menu <BsCaretRightFill /></a>}
                <div className="app__navbar-menu_smallscreen" style={ displayMenu ? {display: 'flex'} : {display: 'none'} }>
                  <Link className='app__navbar-menu_menu-item' to="/dining" >Dining</Link>
                  <Link className='app__navbar-menu_menu-item' to="/bar" >Bar</Link>
                  <Link className='app__navbar-menu_menu-item' to="/dessert" >Dessert</Link>
                </div>
              </li>
              :
              <li className="p__opensans"><a href="#complete-menu">Menu</a></li>
            }
            <li><a href="#blogs" onClick={ () => setToggleMenu(false) }>Blogs</a></li>
            <li><a href="#contact" onClick={ () => setToggleMenu(false) }>Contact</a></li>
          </ul>
          <ul className="app__navbar-smallscreen_login">
            <li><a href="#login" onClick={ () => setToggleMenu(false) }>Login</a></li>
            <li><a href="#register" onClick={ () => setToggleMenu(false) }>Register</a></li>
            <li><a href="#booking" onClick={ () => setToggleMenu(false) }>Book Table</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;