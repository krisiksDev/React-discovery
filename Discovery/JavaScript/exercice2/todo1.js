async function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  console.log("fetchUsers() → Appel API users...");

  const response = await fetch(url);

  if (!response.ok) {
    console.error("fetchUsers() → Erreur HTTP");
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const users = await response.json();
  console.log(`fetchUsers() → ${users.length} utilisateurs reçus`);

  return users.slice(0, 10);
}

async function afficherUtilisateurs() {
  console.log("Chargement des utilisateurs...");

  try {
    const users = await fetchUsers();

    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} | ${user.email} | ${user.address.city}`);
    });

    console.log("Succès : utilisateurs affichés");
  } catch (error) {
    console.error("Erreur lors de l'affichage :", error.message);
  }
}

afficherUtilisateurs();
