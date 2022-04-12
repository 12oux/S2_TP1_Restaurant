const promotions = [
  {
    active: true,
    nom: "2 pour 1",
    description: "2 pour 1 sur toutes les pizzas après 19h",
    imgsrc: "/images/promo/promo1.jpg",
  },
  {
    active: true,
    nom: "Mardis en folie!",
    description: "Deuxième pizza moitié prix les mardis",
    imgsrc: "/images/promo/promo2.jpg",
  },
  {
    active: true,
    nom: "Aubaines Lève-tot",
    description: "50% de rabais entre 6 et 8 heures le week-end",
    imgsrc: "/images/promo/promo3.jpg",
  },
];

exports.getPromotionsActive = () => {
  let promoActive = [];
  let order = 1;
  promotions.forEach((promo) => {
    if (promo.active) {
      promoActive.push({
        order: order,
        nom: promo.nom,
        description: promo.description,
        imgsrc: promo.imgsrc,
      });
      order++;
    }
  });
  return promoActive;
};
