/*
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import CardImage from "./components/CardImage";
import CardContent from "./components/CardContent";
import CardActions from "./components/CardActions";
import Button from "./components/Button";
import { useEffect, useState } from "react";
*/

import { useState } from "react";
import { ProductGallery } from "./components/ProductGallery";

const products = [
  {
    id: 1,
    name: "Laptop Pro",
    category: "Tech",
    price: 1299,
    image: "💻",
    description: "Puissant et portable",
  },
  {
    id: 2,
    name: "Smartphone X",
    category: "Tech",
    price: 899,
    image: "📱",
    description: "Dernière génération",
  },
  {
    id: 3,
    name: "Headphones",
    category: "Audio",
    price: 199,
    image: "🎧",
    description: "Son immersif",
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Tech",
    price: 399,
    image: "⌚",
    description: "Suivi santé complet",
  },
  {
    id: 5,
    name: "Camera 4K",
    category: "Photo",
    price: 799,
    image: "📷",
    description: "Qualité professionnelle",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    category: "Gaming",
    price: 79,
    image: "🖱️",
    description: "Précision extrême",
  },
  {
    id: 7,
    name: "Tablet Pro",
    category: "Tech",
    price: 699,
    image: "📱",
    description: "Créativité nomade",
  },
  {
    id: 8,
    name: "Studio Speakers",
    category: "Audio",
    price: 349,
    image: "🔊",
    description: "Son de studio",
  },
  {
    id: 9,
    name: "Drone 4K",
    category: "Photo",
    price: 1199,
    image: "🚁",
    description: "Prises aériennes",
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const categories = ["Tous", "Tech", "Audio", "Photo", "Gaming"];

  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="ex-4-9-container">
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
              🛒 Nos Produits
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez notre sélection de produits tech et lifestyle
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {filteredProducts.length} produit
              {filteredProducts.length > 1 ? "s" : ""} disponible
              {filteredProducts.length > 1 ? "s" : ""}
            </p>
          </div>

          {/* Filtres */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-200
                ${
                  selectedCategory === cat
                    ? "bg-blue-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }
              `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de cartes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductGallery key={product.id} product={product} />
            ))}
          </div>

          {/* Message si aucun produit */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                Aucun produit trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
 




/*
      <ProductCard
        name = "PC Portable"
        price = {950}
        image = "/images/laptop.jpg"
        discount = {10}
      />

      <Alert type = "info" title = "Information">
        <p>Ceci est une information</p>
      </Alert>

      <Alert type = "error" title = "Erreur"> 
        <p>Une erreur est survenue.</p>
        <button>Réessayer</button>
      </Alert>

*/