import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { images } from '../../constants';
import { TbArrowBigLeftLines } from 'react-icons/tb';
import BlogPageBrief from '../BlogPage/BlogPageBrief';
import Footer from '../Footer/Footer';
import { GlobalContext } from '../../constants/Context';
import './Confirmation.css';



const BookingConfirmation = () => {
    const [searchParams] = useSearchParams();

    const { global_state: {booking}, global_action } = useContext(GlobalContext);
    
    useEffect( () => {
        if (!booking.type && !booking.date && !booking.time)
            {
                global_action(
                    {
                        booking:
                            {
                                type: searchParams.get('type'),
                                date: searchParams.get('date'),
                                time: searchParams.get('time')
                            }
                    }
                );
            }
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="app__confirmation section__padding" style={ {paddingTop: "5rem", paddingBottom: "5rem"} }>
                
                <div className="app__confirmation-message">
                    <div className="app__confirmation-message_img">
                        <img src={images.Confirmation} alt="Chef Illustration" />
                    </div>
                    <p className="app__confirmation-message_subtext">
                        Your booking for {booking.type} on {booking.date} at {booking.time} hours has been successfully done.
                    </p>
                </div>
                
                <button type='button' className='custom__button' onClick={ () => { navigate(-1) } }><a><TbArrowBigLeftLines /></a></button>

            </div>
            <BlogPageBrief />
            <Footer />
        </>
    );
};

export default BookingConfirmation;