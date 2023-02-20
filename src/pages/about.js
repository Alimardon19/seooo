import React from 'react';
import {Helmet} from 'react-helmet';


const About = () => {
    return (
        <div>
            <Helmet>
                <meta property="og:title" content="About page!!"/>
                {/* <link rel='canonical' href='/about'/>/ */}
            </Helmet>
            <h1> This is About Pages </h1>
        </div>
    )
}

export default About;