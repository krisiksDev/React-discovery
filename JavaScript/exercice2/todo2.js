// 🎯 EXERCICE 1.2 - Promises et async/await

const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

// TODO 2: Créer une fonction qui affiche les utilisateurs simplifiés
async function afficherUtilisateurs() {
  console.log("⏳ Chargement des utilisateurs...");

  try {
    const users = await fetchUsers();

    const usersSimplifies = users.map((u) => ({
      nom: u.name,
      email: u.email,
      ville: u.address.city,
    }));

    console.log("✅ Succès : utilisateurs récupérés !");
    console.table(usersSimplifies);
  } catch (error) {
    console.error("❌ Erreur :", error.message);
  }
}