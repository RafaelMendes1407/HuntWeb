const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//inicia o App
const app = express();
app.use(express.json());
app.use(cors());
console.log("Backend Iniciado!");

//Inicia o DB
mongoose.connect("mongodb://localhost:27017/nodeapi",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);
requireDir('./src/models');


app.use('/', require('./src/routes'));

app.listen(3001);