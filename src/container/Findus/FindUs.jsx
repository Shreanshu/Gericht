import React from 'react';
import { SubHeading } from '../../components/index';
import { images } from '../../constants/index';
import './FindUs.css';



const FindUs = () => (
  <div className="app__findus app__wrapper section__padding" id='contact'>

    <div className="app__wrapper_info">

      <SubHeading title="Contact" />

      <h1 className="headtext__cormorant">Find Us</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG. <br></br> Mobile No. - +91 6381322681</p>
        <p className="p__cormorant" style={ {color: '#DCCA87', margin: '3rem 0 2rem'} }>Opening Hours</p>
        <p className="p__opensans">Monday to Friday : 08:00 AM - 10:00 PM</p>
        <p className="p__opensans">Saturday to Sunday : 12:00 PM - 10:00 PM</p>
      </div>

      <button type='button' className="custom__button"><a href='#location'>Visit Our Restaurant</a></button>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>

  </div>
);

export default FindUs;