const express = require('express');
const path = require("path");
const fs = require("fs");
const axios = require('axios');
const PORT = process.env.PORT || 5000;

const app = express();



/**
 * set Home page meta title end description
 */
app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            return console.log(error);
        }
        data = data.replace(/__META_OG_TITLE__/g, "Home")
            .replace(/__META_OG_DESCRIPTION__/g, "my home descriptions")
            .replace(/__META_TITLE__/g, "Home")
            .replace(/__META_DESCRIPTION__/g, "my home descriptions")
        res.send(data);
    })
})

app.get('/about', (req, res) => {

    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
        const filePath = path.resolve(__dirname, "index.html");
        fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            return console.log(error);
        }
        data = data.replace(/__META_OG_TITLE__/g, response.data.title)
            .replace(/__META_OG_DESCRIPTION__/g, "my about descriptions")
            .replace(/__META_TITLE__/g, response.data.title)
            .replace(/__META_DESCRIPTION__/g, "my about descriptions")
            res.send(data);
        })
    })

    
})

app.use(express.static(path.resolve(__dirname)))

app.use((req, res, next) => {
    const filePath = path.resolve(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            return console.log(error);
        }
        res.send(data);
    })
})



/**
 * start server
 */
app.listen(PORT, () => {
    console.log(PORT, ' starting...');
})













