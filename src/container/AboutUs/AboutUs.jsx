import React, { useState } from 'react';
import { images } from '../../constants/index';
import './AboutUs.css';



const AboutUs = () => {
  const [aboutKnowMore, setAboutKnowMore] = useState(false);
  const [historyKnowMore, setHistoryKnowMore] = useState(false);

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>
      
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="Spoon Image" className='spoon__img' />
          {
            aboutKnowMore
            ? <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam fringilla ut velit vel pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br /><br /> Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. <br /><br /> Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
            : <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam fringilla ut velit vel pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          }
          <button type='button' className="custom__button" onClick={ () => { setAboutKnowMore(!aboutKnowMore) } }>{aboutKnowMore ? "Know Less" : "Know More"}</button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="Knife Image" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="Spoon Image" className='spoon__img' />
          {
            historyKnowMore
            ? <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam fringilla ut velit vel pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus. <br /><br /> Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. <br /><br /> Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
            : <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam fringilla ut velit vel pulvinar. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          }
          <button type='button' className="custom__button" onClick={ () => { setHistoryKnowMore(!historyKnowMore) } }>{historyKnowMore ? "Know Less" : "Know More"}</button>
        </div>

      </div>
      
    </div>
  )
}

export default AboutUs;