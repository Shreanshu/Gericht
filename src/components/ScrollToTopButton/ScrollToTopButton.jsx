import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';



const ScrollToTopButton = () => {
    const [scrollVisibility, setScrollVisibility] = useState(false);

    window.onscroll = () => {
        if (document.body.getBoundingClientRect().top < -window.innerHeight)
            {
                setScrollVisibility(true);
            }
        else
            {
                setScrollVisibility(false);
            }
    };

    const ScrollHandler = () => {
        window.scrollTo(0,0);
    }

    return (
        <>
            {
                scrollVisibility &&
                <div className="app__scrollbutton flex__center" onClick={ ScrollHandler }>
                    <FaArrowUp />
                </div>
            }
        </>
    );
};

export default ScrollToTopButton;