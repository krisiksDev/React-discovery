// EXERCICE 1.1
// Données de départ
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

const produitsTechEnStock = [produits.filter(({ categorie, enStock }) => categorie === "tech" && enStock)]; // À compléter
console.log("1. Produits tech en stock:");
console.log(produitsTechEnStock);


// TODO 2: Calculer le prix total des produits en stock

const prixTotal = produitsfilter(({ enStock }) => enStock).reduce((total, { prix }) => total + prix, 0); ; // À compléter
console.log("\n2. Prix total des produits en stock:", prixTotal, "€");


// TODO 3: Créer un tableau avec seulement {nom, prix}

const produitsSimplifies = produits.map(({ nom, prix }) => ({ nom, prix }));
console.log("\n3. Produits simplifiés:");
console.log(produitsSimplifies);


// TODO 4: Grouper les produits par catégorie

const produitsParCategorie = produits.reduce((acc, produit) => {
  const { categorie } = produit;

  if (!acc[categorie]) {
    acc[categorie] = [];
  }

  acc[categorie].push(produit);
  return acc;
}, {});
console.log("\n4. Produits groupés par catégorie:");
console.log(produitsParCategorie);