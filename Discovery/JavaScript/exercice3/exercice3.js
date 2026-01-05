// 🎯 EXERCICE 1.3 - Code ES5 à refactoriser

// TODO: Refactorisez ce code en utilisant les features ES6+

// ❌ Code ES5 ancien
function creerUtilisateur(nom, age, ville) {
  var utilisateur = {
    nom: nom,
    age: age,
    ville: ville,
    email: nom.toLowerCase() + "@example.com",
  };
  return utilisateur;
}

function afficherUtilisateur(utilisateur) {
  var nom = utilisateur.nom;
  var age = utilisateur.age;
  var ville = utilisateur.ville;
  console.log("Utilisateur: " + nom + ", " + age + " ans, habite à " + ville);
}

function filtrerMajeurs(utilisateurs) {
  var majeurs = [];
  for (var i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].age >= 18) {
      majeurs.push(utilisateurs[i]);
    }
  }
  return majeurs;
}

function calculerAgeMoyen(utilisateurs) {
  var total = 0;
  for (var i = 0; i < utilisateurs.length; i++) {
    total = total + utilisateurs[i].age;
  }
  return total / utilisateurs.length;
}

function fusionnerUtilisateurs(utilisateurs1, utilisateurs2) {
  var tous = [];
  for (var i = 0; i < utilisateurs1.length; i++) {
    tous.push(utilisateurs1[i]);
  }
  for (var j = 0; j < utilisateurs2.length; j++) {
    tous.push(utilisateurs2[j]);
  }
  return tous;
}

function ajouterPropriete(utilisateur, cle, valeur) {
  var copie = {};
  for (var prop in utilisateur) {
    copie[prop] = utilisateur[prop];
  }
  copie[cle] = valeur;
  return copie;
}

// Test du code
var user1 = creerUtilisateur("Alice", 25, "Paris");
var user2 = creerUtilisateur("Bob", 17, "Lyon");
var user3 = creerUtilisateur("Charlie", 30, "Marseille");

var utilisateurs = [user1, user2, user3];

console.log("=== Test du code ES5 ===\n");
afficherUtilisateur(user1);

var majeurs = filtrerMajeurs(utilisateurs);
console.log("\nUtilisateurs majeurs:", majeurs.length);

var ageMoyen = calculerAgeMoyen(utilisateurs);
console.log("Âge moyen:", ageMoyen);

var autresUsers = [creerUtilisateur("David", 22, "Toulouse")];
var tousLesUsers = fusionnerUtilisateurs(utilisateurs, autresUsers);
console.log("Total utilisateurs:", tousLesUsers.length);

var userAvecTel = ajouterPropriete(user1, "telephone", "0612345678");
console.log("\nUser avec téléphone:", userAvecTel);
 