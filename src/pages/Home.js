import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const Home = () => {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const data = ['Banana', 'Apple', 'Samsung', 'Hamburgers', 'Chockolate', 'Carrot'];

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://lesson-backend.onrender.com/user/',
        }).then(res => {
            setState(res.data);
        }).finally(() => setLoading(false))
    }, []);

    // useEffect(() => {
    //     for (let i = 0; i < data.length; i++) {
    //         axios.post('https://lesson-backend.onrender.com/user/', {name: data[i]}).then(res => {
    //             setState(res.data);
    //         }).finally(() => setLoading(false))
    //     }
    // }, []);



    const changePage = (name, id) => {
        navigate(`/product/${id}/${name}`);
    }


    return (
        loading ? <h5> Loading.... </h5> :
        <div>
            <h1> Home Page</h1>
            {
                state.map(({name, id}) => {
                    return (
                        <h3 onClick={() => changePage(name, id)} key={id}> {name} </h3>
                    )
                })
            }
        </div>
    )
}


export default Home;