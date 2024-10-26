class Event{
    constructor(idEvent, nomEvent, idCreateur, lieu, dateCreation, dateDebut, dateFin, heure, description, categorie, noParticipant, participant, commentaire, nombreLike, image){
        this.idEvent =  idEvent;
        this.nomEvent = nomEvent;
        this.idCreateur = idCreateur;
        this.lieu = lieu;
        this.dateCreation = dateCreation;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.heure = heure;
        this.description = description;
        this.noParticipant = noParticipant;
        this.participant = participant;
        this.categorie = categorie;
        this.commentaire = commentaire;
        this.nombreLike = nombreLike;
        this.image = image;
    }
}

module.exports = { Event };