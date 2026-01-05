const produits = [
  { id: 1, nom: "Laptop", prix: 999, categorie: "tech", enStock: true },
  { id: 2, nom: "Souris", prix: 29, categorie: "tech", enStock: true },
  { id: 3, nom: "Chaise", prix: 199, categorie: "mobilier", enStock: false },
  { id: 4, nom: "Clavier", prix: 79, categorie: "tech", enStock: true },
  { id: 5, nom: "Bureau", prix: 399, categorie: "mobilier", enStock: true },
  { id: 6, nom: "Écran", prix: 299, categorie: "tech", enStock: false },
  { id: 7, nom: "Lampe", prix: 49, categorie: "mobilier", enStock: true },
];
// TODO 1: Filtrer les produits tech en stock

const produitsTechEnStock = [produits.filter(({ categorie, enStock }) => categorie === "tech" && enStock)];
console.log("1. Produits tech en stock:");
console.log(produitsTechEnStock);