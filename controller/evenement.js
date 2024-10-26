const { Event } = require("../model/evenement");
const client = require("../bd/connect");
const e = require("express");

const ajouterEvent = async (req, res)=>{
    try {
        let evenement = new Event(req.body.idEvent, req.body.nomEvent, req.body.idCreateur, req.body.lieu, req.body.dateCreation, req.body.dateDebut, req.body.dateFin, req.body.heure, req.body.description, req.body.noParticipant, req.body.participant, req.body.categorie, req.body.commentaire, req.body.nombreLike, req.body.image);
        let result = await client.bd().collection("evenement").insertOne(evenement);

        res.status(200).json(result);

    } catch (error){
        console.log(error);
        res.status(500).json(result);
        
    }
    
};

const getTousEvent = async (req, res)=>{
    try {
        let cursor = client.bd.collection("evenement").find();
        let result = await cursor.toArray();
        if(result.length>0) {
            res.status(200).json(result);
        }else{
            res.status(200).json({msg: "Aucun utilisateur trouve"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
};


const getEvent = async (req, res)=>{
    try {
        let id = new ObjectId(req.params.id);
        let cursor = client.bd.collection("evenement").find({_id : id});
        let result = await cursor.toArray();
        if(result.length>0) {
            res.status(200).json(result[0]);
        }else{
            res.status(200).json({msg: "Cet utilisateur n'existe pas !!!"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const modifierEvent = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id);
        let nidEvent = req.body.idEvent;
        let nnomEvent = req.body.nomEvent;
        let nidCreateur = req.body.idCreateur;
        let nlieu = req.body.lieu;
        let ndateCreation = req.body.dateCreation;
        let ndateDebut = req.body.date.dateDebut;
        let ndateFin = req.body.dateFin;
        let nheure = req.body.heure;
        let ndescription = req.body.description;
        let nnoParticipant = req.body.noParticipant;
        let nparticipant = req.body.participant;
        let ncategorie = req.body.categorie;
        let ncommentaire = req.body.commentaire;
        let nnombreLike = req.body.nombreLike;
        let nimage = req.body.image;

        let result = await client.bd().collection("evenement").updateOne({_id : id}, {$set : {idEvent : nidEvent, nomEvent : nnomEvent, idCreateur: nidCreateurr, lieu : nlieu, dateCreation : ndateCreation, dateDebut : ndateDebut, dateFin: ndateFin, heure : nheure, description : ndescription, noParticipant : nnoParticipant, participant : nparticipant, categorie : ncategorie, commentaire : ncommentaire, nombreLike : nnombreLike, image : nimage}});
        if(result.modifiedCount==1){
            res.status(200).json({msg : "Modification reussie"});
        }else{
            res.status(404).json({msg : "Modification invalide"});
        }
        
    } catch (error) {
    console.log(500).json(error);
    res.status(500).json(error);
    }
    
};




const supprimerEvent = async (req, res)=>{
    try{
        let id = new ObjectId(req.params.id);
        
        let result = await client.bd().collection("evenement").updateOne({_id : id});
        if(result.deletedCount==1){
            res.status(200).json({msg : "Suppression reussie"});
     
        }else{
            res.status(404).json({msg : "Suppression invalide"});
        }
        
    } catch (error) {
    console.log(500).json(error);
    res.status(500).json(error);
    }
    
};


module.xports = { ajouterEvent, getTousEvent, getEvent, modifierEvent, supprimerEvent };