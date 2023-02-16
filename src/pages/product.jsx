import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MetaDecorator from '../utils/meta';


const Product = () => {
    const {id, name} = useParams();
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
        <div>
            <MetaDecorator title={name} description={'Helllo world' + name}/>
            <h1> 
                <span style={{fontSize: '24px', fontWeight: '400'}}> Product: </span> 
                {data?.name} 
            </h1>
        </div>
    )
}


export default Product;