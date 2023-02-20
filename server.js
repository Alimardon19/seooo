const express = require('express');
const app = express();
const PORT = process.env.POST || 5000;

app.use(require('prerender-node').set('prerenderToken', 'mYSkPcK7M3hCeEWyj21P'));



app.listen(PORT, () => {
    console.log(PORT + ': worked...')
})

























// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const PORT = process.env.POST || 5000;

// const app = express();

// app.get('/', (req, res) => {
//     const filePath = path.resolve(__dirname, "./build", "index.html");
//     fs.readFile(filePath, "utf-8", (error, data) => {
//         if (error) {
//             return console.log(error);
//         }

//         data = data
//             .replace(/__TITLE__/g, "Home page")
//             .replace(/__DESCRIPTION__/g, "Home page description");

//         res.send(data);
//     })
// });

// app.use(express.static(path.resolve(__dirname, "./build")));

// app.listen(PORT, () => {
//     console.log(PORT + ': worked...')
// })