import React, { useContext, useRef, useState } from 'react';
import { SubHeading } from '../../components/index';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../constants/Context';
import './Booking.css';



const Booking = () => {
    const { global_state: {booking_status, booking}, global_action } = useContext(GlobalContext);

    const input1 = useRef(null);
    const [message1, setMessage1] = useState(false);

    const input2 = useRef(null);
    const [message2, setMessage2] = useState(false);

    const input3 = useRef(null);
    const [message3, setMessage3] = useState(false);

    const [inputValues, setInputValues] = useState(null);

    const Validate = () => {
        if (input1.current.value === '---select---')
            {
                setMessage1(true);
            }
        else
            {
                setMessage1(false);
            }
        
        if (!input2.current.value)
            {
                setMessage2(true);
            }
        else
            {
                setMessage2(false);
            }
        
        if (!input3.current.value)
            {
                setMessage3(true);
            }
        else
            {
                setMessage3(false);
            }
    };

    const UpdateValues = () => {
        if (input1.current.value !== '---select---' && input2.current.value && input3.current.value)
            {
                setInputValues( {type: input1?.current.value, date: input2?.current.value, time: input3?.current.value} );
            }
        else
            {
                setInputValues(null);
            }
    };

    const UpdateStatus = () => {
        if (inputValues !== null)
            {
                global_action( {booking_status: true});
            }
    };

    return (
        <div className="app__booking flex__center" id='booking'>
            <div className="app__booking-content app__bg">
                
                <SubHeading title="Reservations" font='3rem' margin='3rem' />
                
                <h1 className="headtext__cormorant">Book A Table</h1>

                {
                    booking_status
                    ?
                    <>
                        <p className="app__booking-confirmation p__cormorant">
                                Your booking for {booking.type} on {booking.date} at {booking.time} hours has already been done.
                        </p>
                        <button type='button' className="app__booking-cancel custom__button" onClick={ () => global_action( {booking_status: false, booking: {type: null, date: null, time: null}} ) } >
                            <a href='#booking'>Cancel Booking</a>
                        </button>
                    </>
                    :
                    <>
                        <form action="" className="app__booking-content_inputfields">

                            <select name="type" id="type" className='query' ref={input1} onChange={ () => { setMessage1(false); UpdateValues() } } >
                                <option>---select---</option>
                                <option value="1 Person">1 Person</option>
                                <option value="2 Persons">2 Persons</option>
                                <option value="4 Persons">4 Persons</option>
                                <option value="6 Persons">6 Persons</option>
                                <option value="12 Persons">12 Persons</option>
                                <option value="Bar Lounge">Bar Lounge</option>
                                <option value="Banquet">Banquet</option>
                            </select>

                            <input type="date" className='query' ref={input2} onChange={ () => { setMessage2(false); UpdateValues() } } />
                            
                            <input type="time" className='query' ref={input3} onChange={ () => { setMessage3(false); UpdateValues() } } />
                            
                        </form>

                        <button type='submit' className="custom__button" onClick={ () => {Validate(); UpdateStatus()} } >
                            <Link to={inputValues !== null ? `/bookingconfirmation?type=${inputValues.type}&date=${inputValues.date}&time=${inputValues.time}` : ""}>
                                Book Now
                            </Link>
                        </button>
                    </>
                }
                
                {
                    message1 &&
                    <div className="error-message" id='message-1'>
                        Please select an option!
                    </div>
                }

                {
                    message2 &&
                    <div className="error-message" id='message-2'>
                        Please select an option!
                    </div>
                }

                {
                    message3&&
                    <div className="error-message" id='message-3'>
                        Please select an option!
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Booking;
