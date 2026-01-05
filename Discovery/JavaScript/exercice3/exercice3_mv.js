// Créer un utilisateur (object shorthand + template literals + default parameters)
const creerUtilisateur = (nom = "Inconnu", age = 0, ville = "N/A") => {
  const email = `${nom.toLowerCase()}@example.com`;
  return { nom, age, ville, email }; // object shorthand
};

// Afficher un utilisateur (destructuring + template literals)
const afficherUtilisateur = ({ nom, age, ville }) => {
  console.log(`Utilisateur: ${nom}, ${age} ans, habite à ${ville}`);
};

// Filtrer les majeurs (filter + arrow)
const filtrerMajeurs = (utilisateurs = []) =>
  utilisateurs.filter(({ age }) => age >= 18);

// Calculer l’âge moyen (reduce + default param)
const calculerAgeMoyen = (utilisateurs = []) => {
  if (utilisateurs.length === 0) return 0;

  const total = utilisateurs.reduce((acc, { age }) => acc + age, 0);
  return total / utilisateurs.length;
};

// Fusionner deux tableaux (spread operator + default params)
const fusionnerUtilisateurs = (utilisateurs1 = [], utilisateurs2 = []) => [
  ...utilisateurs1,
  ...utilisateurs2,
];

// Ajouter une propriété (spread + computed property)
const ajouterPropriete = (utilisateur = {}, cle = "nouvelleCle", valeur = null) => ({
  ...utilisateur,
  [cle]: valeur,
});

const user1 = creerUtilisateur("Alice", 25, "Paris");
const user2 = creerUtilisateur("Bob", 17, "Lyon");
const user3 = creerUtilisateur("Charlie", 30, "Marseille");

const utilisateurs = [user1, user2, user3];

console.log("=== Test du code ES6+ ===\n");
afficherUtilisateur(user1);

const majeurs = filtrerMajeurs(utilisateurs);
console.log("\nUtilisateurs majeurs:", majeurs.length);

const ageMoyen = calculerAgeMoyen(utilisateurs);
console.log("Âge moyen:", ageMoyen);

const autresUsers = [creerUtilisateur("David", 22, "Toulouse")];
const tousLesUsers = fusionnerUtilisateurs(utilisateurs, autresUsers);
console.log("Total utilisateurs:", tousLesUsers.length);

const userAvecTel = ajouterPropriete(user1, "telephone", "0612345678");
console.log("\nUser avec téléphone:", userAvecTel);
