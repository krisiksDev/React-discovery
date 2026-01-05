// 🎯 EXERCICE 1.4 - Interfaces TypeScript - SOLUTION

// ✅ SOLUTION 1: Interface Book
interface Book {
  id: number;
  titre: string;
  auteur: string;
  isbn: string;
  disponible: boolean;
  annee: number;
}

// ✅ SOLUTION 2: Interface Member
interface Member {
  id: number;
  nom: string;
  email: string;
  dateInscription: Date;
}

// ✅ SOLUTION 3: Interface Loan (dateRetour optionnelle)
interface Loan {
  id: number;
  book: Book;
  member: Member;
  dateEmprunt: Date;
  dateRetour?: Date;
}

// ✅ SOLUTION 4: Interface Library
interface Library {
  nom: string;
  books: Book[];
  members: Member[];
  loans: Loan[];
}

// ✅ SOLUTION 5: Type BookStatus (union type)
type BookStatus = "disponible" | "emprunté" | "perdu";

// ✅ SOLUTION 6: Fonction emprunter typée
function emprunter(book: Book, member: Member): Loan {
  if (!book.disponible) {
    throw new Error(`Le livre "${book.titre}" n'est pas disponible`);
  }

  book.disponible = false;

  const loan: Loan = {
    id: Date.now(), // Simplification pour l'exemple
    book,
    member,
    dateEmprunt: new Date(),
  };

  return loan;
}

// ✅ SOLUTION 7: Fonction retourner typée
function retourner(loan: Loan): void {
  loan.book.disponible = true;
  loan.dateRetour = new Date();
}

// ✅ BONUS 1: BookSummary avec Pick
type BookSummary = Pick<Book, "id" | "titre" | "auteur">;

function creerResume(book: Book): BookSummary {
  return {
    id: book.id,
    titre: book.titre,
    auteur: book.auteur,
  };
}

// ✅ BONUS 2: PublicMember avec Omit (sans email)
type PublicMember = Omit<Member, "email">;

function getPublicProfile(member: Member): PublicMember {
  const { email, ...publicInfo } = member;
  return publicInfo;
}

// ✅ BONUS 3: Type guard pour vérifier la disponibilité
function estDisponible(book: Book): book is Book & { disponible: true } {
  return book.disponible === true;
}

// ✅ BONUS 4: Readonly pour ISBN (immuable)
interface SecureBook extends Omit<Book, "isbn"> {
  readonly isbn: string;
}

// ===== Tests et démonstration =====

console.log("=== 📚 Système de Gestion de Bibliothèque ===\n");

// Créer des livres
const livre1: Book = {
  id: 1,
  titre: "Clean Code",
  auteur: "Robert C. Martin",
  isbn: "978-0132350884",
  disponible: true,
  annee: 2008,
};

const livre2: Book = {
  id: 2,
  titre: "The Pragmatic Programmer",
  auteur: "David Thomas",
  isbn: "978-0135957059",
  disponible: true,
  annee: 2019,
};

// Créer des membres
const membre1: Member = {
  id: 1,
  nom: "Alice Dupont",
  email: "alice@example.com",
  dateInscription: new Date("2024-01-15"),
};

const membre2: Member = {
  id: 2,
  nom: "Bob Martin",
  email: "bob@example.com",
  dateInscription: new Date("2024-03-20"),
};

// Créer une bibliothèque
const bibliotheque: Library = {
  nom: "Bibliothèque Centrale",
  books: [livre1, livre2],
  members: [membre1, membre2],
  loans: [],
};

console.log(`📖 Bibliothèque: ${bibliotheque.nom}`);
console.log(`Livres: ${bibliotheque.books.length}`);
console.log(`Membres: ${bibliotheque.members.length}\n`);

// Test: Emprunter un livre
console.log("--- Test: Emprunter un livre ---");
try {
  const emprunt = emprunter(livre1, membre1);
  bibliotheque.loans.push(emprunt);
  console.log(`✅ ${membre1.nom} a emprunté "${livre1.titre}"`);
  console.log(`Date d'emprunt: ${emprunt.dateEmprunt.toLocaleDateString()}`);
  console.log(`Livre disponible: ${livre1.disponible}\n`);
} catch (error: any) {
  console.error(`❌ ${error.message}\n`);
}

// Test: Essayer d'emprunter un livre déjà emprunté
console.log("--- Test: Livre déjà emprunté ---");
try {
  emprunter(livre1, membre2);
} catch (error: any) {
  console.error(`❌ ${error.message}\n`);
}

// Test: Type guard
console.log("--- Test: Vérification disponibilité ---");
if (estDisponible(livre2)) {
  console.log(`✅ "${livre2.titre}" est disponible pour emprunt\n`);
}

// Test: Retourner un livre
console.log("--- Test: Retourner un livre ---");
retourner(bibliotheque.loans[0]);
console.log(`✅ "${livre1.titre}" a été retourné`);
console.log(`Livre disponible: ${livre1.disponible}\n`);

// Test BONUS: BookSummary
console.log("--- BONUS 1: Résumé de livre ---");
const resume = creerResume(livre1);
console.log(resume);
console.log("");

// Test BONUS: PublicMember
console.log("--- BONUS 2: Profil public ---");
const profilPublic = getPublicProfile(membre1);
console.log(profilPublic);
console.log("");

// Test BONUS: Readonly ISBN
console.log("--- BONUS 3: ISBN protégé ---");
const livreSecurise: SecureBook = {
  ...livre1,
  isbn: "978-0132350884",
};
console.log(`ISBN (readonly): ${livreSecurise.isbn}`);
// livreSecurise.isbn = "autre"; // ❌ Erreur TypeScript!

// 🎓 Affichage final
console.log("\n=== 📊 Statistiques ===");
console.log(
  `Emprunts en cours: ${bibliotheque.loans.filter((l) => !l.dateRetour).length}`
);
console.log(
  `Livres disponibles: ${bibliotheque.books.filter((b) => b.disponible).length}`
);

// 🎓 Notes pédagogiques
console.log("\n💡 Concepts démontrés:");
console.log("✓ Interfaces avec propriétés obligatoires et optionnelles");
console.log("✓ Types union (Status)");
console.log("✓ Utility types (Pick, Omit)");
console.log("✓ Type guards (estDisponible)");
console.log("✓ Readonly properties");
console.log("✓ Typage strict des fonctions");
 