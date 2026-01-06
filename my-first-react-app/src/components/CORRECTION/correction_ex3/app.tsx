// 🎯 EXERCICE 3.3 - Solution: App.tsx

import { products } from "./data/products";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <div className="ex-3-3-container">
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Nos Produits
            </h1>
            <p className="text-gray-600">
              {products.length} produit{products.length > 1 ? "s" : ""}{" "}
              disponible
              {products.length > 1 ? "s" : ""}
            </p>
          </header>
          {/* Message si liste vide */}Ò
          {products.length === 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <p className="text-yellow-800 text-lg">
                Aucun produit disponible pour le moment.
              </p>
              <p className="text-yellow-600 text-sm mt-2">
                Revenez bientôt pour découvrir nos nouveautés !
              </p>
            </div>
          )}
          {/* Grille de produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 