const express = require("express");
const { ajouterEvent, getTousEvent, getEvent } = require("../controller/evenement");
const router = express.Router();

router.route("/evenement").post(ajouterEvent);
router.route("/evenement").get(getTousEvent);
router.route("/evenement/:id").get(getEvent);
router.route("/evenement/:id").put(modifierEvent);
router.route("/evenement/:id").delete(supprimerEvent);

module.exports = router;

