interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const categoryColors: Record<string, string> = {
    Tech: "bg-blue-100 text-blue-800",
    Audio: "bg-purple-100 text-purple-800",
    Photo: "bg-pink-100 text-pink-800",
    Gaming: "bg-green-100 text-green-800",
  };

  return (
    <div
      className="
      bg-white rounded-xl shadow-md overflow-hidden
      transition-all duration-300 ease-in-out
      hover:shadow-2xl hover:-translate-y-2
      flex flex-col
    "
    >
      {/* Zone image/emoji */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex items-center justify-center">
        <span className="text-6xl">{product.image}</span>
      </div>

      {/* Zone contenu */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Badge catégorie */}
        <span
          className={`
          inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start
          ${categoryColors[product.category]}
        `}
        >
          {product.category}
        </span>

        {/* Titre */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {product.description}
        </p>

        {/* Prix et bouton */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-3xl font-bold text-blue-600">
            {product.price}€
          </span>
          <button
            className="
            bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold
            hover:bg-blue-600 active:bg-blue-700
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
          >
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
 