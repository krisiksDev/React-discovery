// 🎯 EXERCICE 1.1 - Manipulation de données JS moderne - SOLUTION

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

// ✅ SOLUTION 1: Filtrer les produits tech en stock
const produitsTechEnStock = produits.filter(
  (produit) => produit.categorie === "tech" && produit.enStock
);

console.log("1. Produits tech en stock:");
console.log(produitsTechEnStock);

// ✅ SOLUTION 2: Calculer le prix total des produits en stock
const prixTotal = produits
  .filter((produit) => produit.enStock)
  .reduce((total, produit) => total + produit.prix, 0);

console.log("\n2. Prix total des produits en stock:", prixTotal, "€");

// ✅ SOLUTION 3: Créer un tableau avec seulement {nom, prix}
// Méthode 1: avec map classique
const produitsSimplifies = produits.map((produit) => ({
  nom: produit.nom,
  prix: produit.prix,
}));

// Méthode 2: avec destructuring (plus élégant)
const produitsSimplifies2 = produits.map(({ nom, prix }) => ({ nom, prix }));

console.log("\n3. Produits simplifiés:");
console.log(produitsSimplifies);

// ✅ SOLUTION 4: Grouper les produits par catégorie
// Méthode 1: avec reduce
const produitsParCategorie = produits.reduce((acc, produit) => {
  const { categorie } = produit;
  if (!acc[categorie]) {
    acc[categorie] = [];
  }
  acc[categorie].push(produit);
  return acc;
}, {});

// Méthode 2: avec forEach (alternative)
const produitsParCategorie2 = {};
produits.forEach((produit) => {
  const { categorie } = produit;
  produitsParCategorie2[categorie] = produitsParCategorie2[categorie] || [];
  produitsParCategorie2[categorie].push(produit);
});

console.log("\n4. Produits groupés par catégorie:");
console.log(produitsParCategorie);

// 🎓 BONUS: Statistiques avancées
console.log("\n📊 BONUS - Statistiques:");

const stats = {
  total: produits.length,
  enStock: produits.filter((p) => p.enStock).length,
  prixMoyen: produits.reduce((sum, p) => sum + p.prix, 0) / produits.length,
  produitLePlusCher: produits.reduce((max, p) => (p.prix > max.prix ? p : max)),
  produitLeMoinsCher: produits.reduce((min, p) =>
    p.prix < min.prix ? p : min
  ),
};

console.log(stats);
 