import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des utilisateurs");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        setError("Impossible de charger les utilisateurs");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Liste des utilisateurs</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong>
            <br />
            📧 {user.email}
            <br />
            📍 {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
