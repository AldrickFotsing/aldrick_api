const { connecter } = require('./bd/connect');
const express = require('express');
const routeEvent = require("./route/evenement");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1", routeEvent);
connecter("mongodb://127.0.0.1:27017/", (erreur)=>{
    if(erreur){
        console.log("Erreur lors de la connexion avec la base de donnees");
        process.exit(-1);
    }else{
        console.log("Connexion avec la base de donnee etablie");
    }
});

app.listen(3000);
console.log('Attentes des requetes au port 3000');
