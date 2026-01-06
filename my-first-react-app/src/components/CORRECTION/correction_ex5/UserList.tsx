// 🎯 EXERCICE 4.2 - Solution: UserList.tsx

import { useState, useEffect } from "react";
import { User } from "../../types/User.types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Une erreur est survenue";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Exécuter uniquement au montage

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // Re-déclencher le useEffect en modifiant un state
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-xl text-gray-600">
            ⏳ Chargement des utilisateurs...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md text-center">
          <div className="text-5xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Erreur de chargement
          </h2>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            🔄 Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          👥 Liste des utilisateurs
        </h1>
        <p className="text-gray-600">
          {users.length} utilisateur{users.length > 1 ? "s" : ""} chargé
          {users.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-3">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {user.email}
                </a>
              </div>

              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <span className="text-gray-600">{user.address.city}</span>
              </div>

              <div className="flex items-start">
                <span className="mr-2">📞</span>
                <span className="text-gray-600">{user.phone}</span>
              </div>

              <div className="flex items-start">
                <span className="mr-2">🌐</span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </div>

              <div className="flex items-start">
                <span className="mr-2">🏢</span>
                <span className="text-gray-600">{user.company.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 