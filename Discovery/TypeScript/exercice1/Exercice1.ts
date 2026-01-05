// 🎯 EXERCICE 1.4 - Interfaces TypeScript

type Status = "disponible" | "emprunté" | "perdu";
type BookSummary = Pick<Book, "id" | "titre" | "auteur">;

// TODO 1: Créer l'interface Book
interface Book {
  id: number;
  titre: string;
  auteur: string;
  isbn: string;
  disponible: boolean;
  annee: number;
  status?: Status;
}

// TODO 2: Créer l'interface Member
interface Member {
  id: number;
  nom: string;
  email: string;
  dateInscription: string;
}

// TODO 3: Créer l'interface Loan
interface Loan {
  id: number;
  book: Book;
  member: Member;
  dateEmprunt: string;
  dateRetour?: string
}

// TODO 4: Créer l'interface Library
interface Library {
  nom: string;
  books: Book[];
  members: Member[];
  loans: Loan[];
}

// TODO 6: Typer la fonction emprunter
function emprunter(book: Book, member: Member): Loan {
  if (!book.disponible) {
    throw new Error(`Le livre "${book.titre}" n'est pas disponible.`);
  }

  book.disponible = false;
  book.status = "emprunté";

  const loan: Loan = {
    id: Date.now(),
    book,
    member,
    dateEmprunt: new Date().toISOString(),
  };

  return loan;
}

// TODO 7: Typer la fonction retourner
function retourner(loan: Loan): void {

  loan.book.disponible = true;
  loan.book.status = "disponible";
  loan.dateRetour = new Date().toISOString();
}
 