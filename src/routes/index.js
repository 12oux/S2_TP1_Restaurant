var express = require("express");
var router = express.Router();
var indexController = require("../controllers/index.js");

router.get("/", indexController.getHomepage);
router.post("/", indexController.postHomepage);
router.get("/reservation", indexController.getReservation);
router.post("/reservation", indexController.postReservation);
router.get("/galerie", indexController.getGalerie);
router.get("/galerie/:id", indexController.getGalerie);
router.get("/evaluation", indexController.getEvaluation);

module.exports = router;
