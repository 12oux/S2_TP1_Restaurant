const galerieCards = [
  {
    active: true,
    src: "/images/galerie/salle_manger.jpg",
    alt: "Salle à manger",
    tooltip: "Le luxe, abordable!",
    titre: "Salle à Manger ",
  },
  {
    active: true,
    src: "/images/galerie/valerie.jpg",
    alt: "Valérie propriétaire",
    tooltip: "La propriétaire!",
    titre: "Valérie",
  },
  {
    active: true,
    src: "/images/galerie/melanie.jpg",
    alt: "Mélanie serveuse",
    tooltip: "Notre spécialiste du café!",
    titre: "Mélanie",
  },
  {
    active: true,
    src: "/images/galerie/reservation.jpg",
    alt: "Table réservée",
    tooltip: "Réserver pour vos évènements spéciaux!",
    titre: "Réservation",
  },
  {
    active: true,
    src: "/images/galerie/pates.jpg",
    alt: "Assiette de pâtes!",
    tooltip: "Nos pâtes sont toujours fraîches",
    titre: "Plât de pâtes",
  },
  {
    active: true,
    src: "/images/galerie/victor.jpg",
    alt: "Victor sommelier",
    tooltip: "Notre sommelier",
    titre: "Victor",
  },
  {
    active: true,
    src: "/images/galerie/cave_vin.jpg",
    alt: "Cave à vin",
    tooltip: "Notre cave à vin comporte 2000 bouteilles de grands crus!",
    titre: "Cellier",
  },
  {
    active: true,
    src: "/images/galerie/pizza.jpg",
    alt: "Pizza",
    tooltip: "Essayer nos pizzas fines ou traditionnelles",
    titre: "Pizza",
  },
  {
    active: true,
    src: "/images/galerie/sous_marin2.jpg",
    alt: "Sandwich sous-marin",
    tooltip: "Nous avons réinventé le sous-marin pour vous!",
    titre: "Sous-marin",
  },
];

exports.getGalerieCards = () => {
  let activeGalerieCards = [];
  activeGalerieCards = galerieCards.filter((card) => card.active);
  activeGalerieCards.forEach((card, index) => (card.id = index));

  return activeGalerieCards;
};
