const fs = require('fs');
const express = require('express');



const app = express();

// HTTP GET method
// app.get('/', (req,res)=>{
//     res
//         .status(200)
//         .json({ message: 'Hello from the server side!', app: 'Natours'});
// });

// // HTTP POST method
// app.post('/', (req,res)=>{
//     res
//         .status(200)
//         .send('post method is working!');
// });

const tours = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)

app.get('/api/v1/tours', (req,res)=>{

});

const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}...`);
});

