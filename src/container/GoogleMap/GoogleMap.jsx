import React from 'react';



const GoogleMap = () => {
    return (
        <div id="location" style={ {width: '100%', height: '100vh', backgroundColor: 'black'} }>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26178.885517854796!2d-2.4864349336306706!3d53.22743689872392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487af85d32550f0b%3A0x88850e736ef57353!2sWhatcroft%20Hall!5e1!3m2!1sen!2sin!4v1672867330149!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={ {border: '0', backgroundColor: 'black'} }
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default GoogleMap;