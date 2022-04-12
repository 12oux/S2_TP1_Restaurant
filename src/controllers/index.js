let reviews = require("../models/reviews");
let promotions = require("../models/promotions");
let galerieCards = require("../models/galerie");

exports.getHomepage = (req, res, next) => {
  res.render("PageHome", {
    title: "Restaurant Pug's express",
    revStars: reviews.getAvgReview(req),
    showReviewAck: req.app.locals.showReviewAck,
    promotions: promotions.getPromotionsActive(),
  });
  req.app.locals.showReviewAck = false;
};
exports.postHomepage = (req, res, next) => {
  req.app.locals.reviews.push({
    nom: req.body.nom,
    commentaire: req.body.review,
    stars: parseInt(req.body.nbEtoiles),
  });
  req.app.locals.showReviewAck = true;
  res.redirect("/#evaluation"); //? est-ce mieux ou pas????
};

exports.getGalerie = (req, res, next) => {
  if (!req.params.id) {
    res.render("pageGalerie", {
      title: "Galerie",
      galerieCards: galerieCards.getGalerieCards(),
    });
  } else {
    res.render("pageBigGalerie", {
      title: "Galerie",
      galerieCards: galerieCards.getGalerieCards(),
      idActive: req.params.id,
    });
  }
};
exports.getEvaluation = (req, res, next) => {
  res.render("pageEvaluation", { title: "Évaluation" });
};

exports.getReservation = (req, res, next) => {
  res.render("pageReservation", { title: "Réservation" });
};

exports.postReservation = (req, res, next) => {
  req.app.locals.reservation = {
    prenom: req.body.prenom,
    nom: req.body.nom,
    type: req.body.type,
    email: req.body.email,
    date: req.body.date,
    telephone: req.body.telephone,
    nbPersonnes: req.body.nbPersonnes,
  };

  res.render("pageConfirmation", {
    title: "Confirmation de Réservation",
    reservation: req.app.locals.reservation,
  });
};
