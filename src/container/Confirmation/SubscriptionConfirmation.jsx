import React from 'react';
import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import { TbArrowBigLeftLines } from 'react-icons/tb';
import BlogPageBrief from '../BlogPage/BlogPageBrief';
import Footer from '../Footer/Footer';
import './Confirmation.css';



const SubscriptionConfirmation = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="app__confirmation section__padding" style={ {paddingTop: "5rem", paddingBottom: "5rem"} }>
                
                <div className="app__confirmation-message">
                    <div className="app__confirmation-message_img">
                        <img src={images.Confirmation} alt="Chef Illustration" />
                    </div>
                    <p className="app__confirmation-message_subtext">
                        You have been subscribed to our newsletter !
                    </p>
                </div>
                
                <button type='button' className='custom__button' onClick={ () => { navigate(-1) } }><a><TbArrowBigLeftLines /></a></button>

            </div>
            <BlogPageBrief />
            <Footer />
        </>
    );
};

export default SubscriptionConfirmation;