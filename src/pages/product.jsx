import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const Product = () => {
    const { id, name } = useParams();
    const [data, setData] = useState("");

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://lesson-backend.onrender.com/user/' + id,
        }).then((res) => {
            setData(res.data);
        })
    }, []);

    return (
        <>
            <Helmet>
                <meta property="og:title" content={name}/>
                {/* <meta name="description" content="Product info"/>
                <link rel='canonical' href='/product/:id/:name'/> */}
            </Helmet>
            <div>
                <h1>
                    <span style={{ fontSize: '24px', fontWeight: '400' }}> Product: </span>
                    {data?.name}
                </h1>
            </div>
        </>
    )
}


export default Product;