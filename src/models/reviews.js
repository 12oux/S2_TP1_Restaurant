const reviews = [
  {
    nom: "Mike Smith",
    commentaire: "the best damn poutine east of the Mississippi",
    stars: 4.5,
  },
  {
    nom: "Roger Gingras",
    commentaire: "ok, mais manque de pépéronni dans ma pizza végé",
    stars: 2,
  },
  {
    nom: "Olivier F.",
    commentaire: "le site ouaibe est parfait",
    stars: 5,
  },
];

exports.getReviews = () => {
  return req.apps.locals.reviews;
};

exports.getAvgReview = (req) => {
  let avgReview = 0;
  req.app.locals.reviews.forEach((review) => {
    avgReview += review.stars;
  });
  avgReview /= req.app.locals.reviews.length;
  avgReview = Math.round(avgReview * 10) / 10;

  return avgReview;
};

exports.loadReviews = () => {
  return reviews;
};
