import React from 'react';
import { images } from '../../constants/index';
import { SubHeading } from '../../components/index';
import './Chef.css';



const Chef = ( {type} ) => {
  return (
    <div className="app__chef app__bg app__wrapper section__padding">
      
      {
        type === 'dining'
        &&
        <>
          <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="Chef Image" />
          </div>

          <div className="app__wrapper_info">
            
            <SubHeading title="Küchenchef's Word" margin='3rem' />
            
            <h1 className="headtext__cormorant">What We Believe In</h1>
            
            <div className="app__chef-content">
              <div className="app__chef-content_quote">
                <img src={images.quote} alt="Quote" />
                <p className="p__opensans"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor.</i></p>
              </div>
              <p className="p__opensans"><i>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</i></p>
            </div>

            <div className="app__chef-sign">
              <p>Kevin Luo</p>
              <p className="p__opensans">Küchenchef & Founder</p>
              <img src={images.sign_chef} alt="Signature" />
            </div>

          </div>
        </>
      }

      {
        type === 'bar'
        &&
        <>
          <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.barfrau} alt="Barfrau Image" />
          </div>

          <div className="app__wrapper_info">
            
            <SubHeading title="Barfrau's Word" margin='3rem' />
            
            <h1 className="headtext__cormorant">What We Believe In</h1>
            
            <div className="app__chef-content">
              <div className="app__chef-content_quote">
                <img src={images.quote} alt="Quote" />
                <p className="p__opensans"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor.</i></p>
              </div>
              <p className="p__opensans"><i>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</i></p>
            </div>

            <div className="app__chef-sign">
              <p>Marie Rausch</p>
              <p className="p__opensans">Barfrau & Founder</p>
              <img src={images.sign_barfrau} alt="Signature" />
            </div>

          </div>
        </>
      }

      {
        type === 'dessert'
        &&
        <>
          <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.konditor} alt="Konditor Image" />
          </div>

          <div className="app__wrapper_info">
            
            <SubHeading title="Konditor's Word" margin='3rem' />
            
            <h1 className="headtext__cormorant">What We Believe In</h1>
            
            <div className="app__chef-content">
              <div className="app__chef-content_quote">
                <img src={images.quote} alt="Quote" />
                <p className="p__opensans"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor.</i></p>
              </div>
              <p className="p__opensans"><i>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</i></p>
            </div>

            <div className="app__chef-sign">
              <p>Michelle Nagrant</p>
              <p className="p__opensans">Konditor & Founder</p>
              <img src={images.sign_konditor} alt="Signature" />
            </div>

          </div>
        </>
      }

    </div>
  )
};

export default Chef;