// 🎯 EXERCICE 1.2 - Promises et async/await - SOLUTION

// ✅ SOLUTION 1: Fonction async qui récupère les users
async function fetchUsers() {
  let users = [];
  let loading = true;
  let error = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`Erreur HTTP ! status: ${response.status}`);
    }
    const data = await response.json();
    users = data;
  } catch (err) {
    console.error("❌ Erreur lors de la récupération des utilisateurs:", err);
  } finally {
    loading = false;
  }

  return { users, loading, error };
}

// ✅ SOLUTION 2: Afficher les utilisateurs simplifiés
async function afficherUtilisateurs() {
  console.log("⏳ Chargement des utilisateurs...\n");

  try {
    const { users } = await fetchUsers();

    // Simplifier les données : prendre seulement nom, email, ville
    const usersSimplifies = users.slice(0, 10).map((user) => ({
      nom: user.name,
      email: user.email,
      ville: user.address.city,
    }));

    console.log("✅ Utilisateurs récupérés avec succès:\n");
    console.table(usersSimplifies);
  } catch (error) {
    console.error("❌ Erreur lors de la récupération:", error.message);
  }
}

// Exécution principale
afficherUtilisateurs();

// ✅ BONUS 1: Récupérer users ET posts en parallèle avec Promise.all
async function fetchUsersEtPosts() {
  console.log("\n\n🎁 BONUS 1 - Requêtes parallèles:\n");
  console.log("⏳ Chargement de users et posts en parallèle...\n");

  try {
    const [usersResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);

    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    console.log("✅ Données récupérées:");
    console.log(`- ${users.length} utilisateurs`);
    console.log(`- ${posts.length} articles`);

    // Exemple: Compter les posts par utilisateur
    const postsParUser = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    console.log("\n📊 Posts par utilisateur:");
    users.slice(0, 5).forEach((user) => {
      console.log(`${user.name}: ${postsParUser[user.id]} posts`);
    });
  } catch (error) {
    console.error("❌ Erreur:", error.message);
  }
}

// Décommenter pour tester le bonus 1
setTimeout(() => fetchUsersEtPosts(), 2000);

// ✅ BONUS 2: Ajouter un timeout avec Promise.race
async function fetchAvecTimeout(url, timeoutMs = 5000) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout dépassé")), timeoutMs);
  });

  const fetchPromise = fetch(url).then((response) => response.json());

  return Promise.race([fetchPromise, timeoutPromise]);
}

async function demonstrationTimeout() {
  console.log("\n\n🎁 BONUS 2 - Timeout avec Promise.race:\n");
  console.log("⏳ Requête avec timeout de 5 secondes...\n");

  try {
    const users = await fetchAvecTimeout(
      "https://jsonplaceholder.typicode.com/users",
      5000
    );
    console.log(`✅ Récupéré ${users.length} utilisateurs avant le timeout`);
  } catch (error) {
    console.error("❌ Erreur:", error.message);
  }
}

// Décommenter pour tester le bonus 2
setTimeout(() => demonstrationTimeout(), 4000);

// 🎓 Notes pédagogiques:
// - async/await rend le code plus lisible que .then()
// - try/catch permet une gestion d'erreurs claire
// - Promise.all: toutes les promesses en parallèle (fail-fast)
// - Promise.allSettled: attend toutes les promesses même si certaines échouent
// - Promise.race: la première promesse qui se résout gagne
 