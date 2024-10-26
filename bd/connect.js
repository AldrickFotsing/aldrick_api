const { MongoClient } = require("mongodb");

var client = null;

function connecter(url, callback){  //Pour connecter notre appli a notre BD
    if(client==null){
        client = new MongoClient(url);

        client.connect((erreur)=>{
            if(erreur){
                client=null;
                callback(erreur);
            }else{
                callback();
            }
        });
    }else{
        callback();
    }
}

function bd(){ //elle nous retourne une instance de la classe Db
    return new Db(client, "dbOk");// dbOk: le nom de la BD
}

function fermerConnexion(){
    if(client){
        client.close();
        client = null;
    }
}

module.exports = { connecter, bd, fermerConnexion }; //Pour exporter les fonctions dans les autres fichiers