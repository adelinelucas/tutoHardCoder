const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.get('/api/tuto', (req, res)=>{
    res.send({
        msg: "Bonjour bienvenue pour cette démo express / react"
    })
});
const PORT = process.env.PORT || 5000;

app.listen(5000, ()=>{
    console.log(`le serveur est lancé sur le port : ${PORT} `);
})