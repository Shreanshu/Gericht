import React from 'react';
import { SubHeading } from '../../components';
import './AboutGericht.css';



const AboutGericht = () => {
    return (
        <div className="app__aboutgericht section__padding" id='about'>
            <SubHeading title="About Gericht" />
            <h1 className="headtext__cormorant">
                Happy hours with us
            </h1>
            <p className="p__opensans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.
            </p>
        </div>
    );
};

export default AboutGericht;