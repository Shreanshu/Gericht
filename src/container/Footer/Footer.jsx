import React from 'react';
import { SubHeading } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';



const Footer = () => (
  <div className='app__footer section__padding' style={ {paddingTop: '0', paddingBottom: '5rem'} }>
    <div className="app__footer-links" style={ {margin: "0"} }>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">
          Contact Us
        </h1>
        <p className="p__opensans address">9 W 53rd St, New York, NY 10019, USA.</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="Gericht" />
        <SubHeading title={`"The best way to find yourself is to lose yourself in the service of others.”`} margin="3rem"/>
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/' target='_blank'><FiFacebook color='#DCCA87' fontSize='40px' /></a>
          <a href='https://twitter.com/' target='_blank'><FiTwitter color='#DCCA87' fontSize='40px' /></a>
          <a href='https://www.instagram.com/' target='_blank'><FiInstagram color='#DCCA87' fontSize='40px' /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">
          Working Hours
        </h1>
        <p className="p__opensans">Monday - Friday :</p>
        <p className="p__opensans">08:00 AM - 10:00 PM</p>
        <p className="p__opensans">Saturday - Sunday :</p>
        <p className="p__opensans">12:00 PM - 10:00 PM</p>
      </div>

    </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;