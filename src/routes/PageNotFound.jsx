import React from 'react';
import { images } from '../constants';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';



const PageNotFound = () => {
    const app__pagenotfound = {
        width: '100%',
        minHeight: '99vh',
        position: 'relative',
        backgroundColor: 'var(--color-black)',
        flexDirection: 'column'
    };

    const app__pagenotfound_background = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0'
    };

    const app__pagenotfound_background_img = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const app__pagenotfound_illustration = {
        width: window.innerWidth < 850 ? '80%' : '40%',
        margin: '0 auto 5rem',
        zIndex: '1'
    };

    const app__pagenotfound_illustration_img = {
        width: '100%'
    };

    const app__pagenotfound_button = {
        zIndex: '1',
        backgroundColor: '#bea856'
    };

    return (
        <div className="app__pagenotfound flex__center" style={ app__pagenotfound }>

            <div className="app__pagenotfound-background" style={ app__pagenotfound_background }>
                <img src={images.emptyRestaurant} alt="Empty Restaurant" style={ app__pagenotfound_background_img } />
            </div>

            <div className="app__pagenotfound-illustration" style={ app__pagenotfound_illustration }>
                <img src={images.illustration_404} alt="404 Illustration" style={ app__pagenotfound_illustration_img} />
            </div>

            <button className="custom__button" style={ app__pagenotfound_button }>
                <Link to='/' className='flex__center'>
                    Gericht&nbsp;<MdOutlineKeyboardArrowRight />&nbsp;Home
                </Link>
            </button>
            
        </div>
    );
};

export default PageNotFound;