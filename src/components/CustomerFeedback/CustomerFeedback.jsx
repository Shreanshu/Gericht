import React from 'react';
import { images } from '../../constants';
import './CustomerFeedback.css';



const CustomerFeedback = ( {idx, name, designation, feedback} ) => {
    const customerImages = [images.Customer01, images.Customer02, images.Customer03, images.Customer04];

    return (
        <div className="app__feedback">

            <div className="app__feedback-img">
                <img src={customerImages[idx]} alt={"Customer Image"+idx+1} />
                <div className="app__feedback-img_quotes">
                    <img src={images.quote} alt="Quote" />
                </div>
            </div>

            <div className="app__feedback-content">
                <p className="p__opensans feedback"><i>{feedback}</i></p>
                <p className="headtext__cormorant name">{name}</p>
                <p className="p__cormorant designation">{designation}</p>
            </div>

        </div>
    );
};

export default CustomerFeedback;