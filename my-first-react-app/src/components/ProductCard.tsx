import type { Product } from "../types/Product.types";

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  const handleAdd = () => {
    if (!product.inStock) return;
    onAdd?.(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.name}
        />

        <span
          className={`badge ${
            product.inStock ? "badge-stock" : "badge-out"
          }`}
        >
          {product.inStock ? "En stock" : "Rupture"}
        </span>
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-row">
          <div className="product-price">
            {product.price.toFixed(2).replace(".", ",")} €
          </div>

          <span className="product-category">
            {product.category}
          </span>
        </div>

        <button
          className={`product-btn ${
            product.inStock ? "btn-primary" : "btn-disabled"
          }`}
          disabled={!product.inStock}
          onClick={handleAdd}
        >
          {product.inStock ? "Ajouter au panier" : "Indisponible"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
