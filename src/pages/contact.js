import React from 'react';
import {Helmet} from 'react-helmet-async';


const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta property="og:title" content="Contact page!!"/>
                {/* <link rel='canonical' href='/contact'/> */}
            </Helmet>
            <h1> This is Contact Pages </h1>
        </div>
    )
}

export default Contact;