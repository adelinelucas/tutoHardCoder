const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());

// récupération des fichiers build de l'app react 
app.use(express.static('client/build'));
app.get('/api/tuto', (req, res)=>{
    res.send({
        msg: "Bonjour bienvenue pour cette démo express / react"
    })
});

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`le serveur est lancé sur le port : ${PORT} `);
})