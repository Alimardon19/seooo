import React from 'react';
import {Helmet} from 'react-helmet-async';


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title> Contact Page </title>
                <link rel='canonical' href='/contact'/>
            </Helmet>
            <h1> This is Contact Pages </h1>
        </div>
    )
}

export default Contact;