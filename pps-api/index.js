const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors({
    origin: `http://localhost:${process.env.CLIENT_PORT}`
}));

app.use('/login', require('./routes/login'));

app.get('/', (req, res) => {
    let x = Math.random() * 100;
    res.json({"username" : 'Yishay'+x});
});
app.listen(process.env.API_PORT || 8000, () =>  {
    console.log('Server started on port 8000');
});