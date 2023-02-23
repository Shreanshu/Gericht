import React, { useContext, useRef, useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../constants/Context';
import './Newsletter.css';



const Newsletter = () => {
  const { global_state: {subscription_status}, global_action } = useContext(GlobalContext);

  const inputEmail = useRef(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [route, setRoute] = useState("");

  const Validate = () => {
    if (inputEmail.current.value === "")
      {
        setErrorMessage(true);
      }
      
    else
      {
        if (!inputEmail.current.value.split("").includes('@') || !inputEmail.current.value.split("").includes('.'))
          {
            setErrorMessage(true);
          }
        else
          {
            setErrorMessage(false);
          }
      }
  };

  const SubscriptionRoute = () => {
    if (inputEmail.current.value.split("").includes('@') && inputEmail.current.value.split("").includes('.'))
      {
        setRoute("/subscriptionconfirmation");
      }
  };

  const UpdateStatus = () => {
    if (route !== "")
      {
        global_action( {subscription_status: true});
      }
  };

  return (
    <div className="app__newsletter_wrapper flex__center">
      <div className="app__newsletter app__bg" id='newsletter'>

        <div className='app__newsletter-heading'>
          <SubHeading title="Newsletter" font='3rem' margin='3rem' />
          <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
          <p className="p__opensans">And never miss latest updates!</p>
        </div>

        {
          subscription_status
          ?
          <>
            <p className="app__newsletter-confirmation p__cormorant">
                You have already subscribed to our newsletter !
            </p>
            <button type='button' className="app__newsletter-unsubscribe custom__button" onClick={ () => global_action( {subscription_status: false} ) } >
              <a href='#newsletter'>Unsubscribe</a>
            </button>
          </>
          :
          <div className="app__newsletter-input flex__center">
            <input type="email" className='email' placeholder='Email Address' ref={inputEmail} onChange={ () => { setErrorMessage(false); SubscriptionRoute() } }/>
            <button type='button' className="custom__button" onClick={ () => {Validate(); UpdateStatus()} } ><Link to={ route }>Subscribe</Link></button>
          </div>
        }

        {
          errorMessage &&
          <div className="error-message" id='message'>
              Please enter valid email address!
          </div>
        }
        
      </div>
    </div>
  );
};

export default Newsletter;
