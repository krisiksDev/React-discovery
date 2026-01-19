import Button from "./Button";
interface ProductCard {
  name: string;
  price: number;
  imageUrl: string;
  discount: number;
}

const ProductCard = ({name, price, imageUrl, discount}: ProductCard) => {
  console.log(name, price, imageUrl, discount);

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Discount: {discount}%</p>
      <Button label="Buy Now" variant="primary" onClick={() => alert(`Purchased ${name}`)} />
    </div>
  );
};

export default ProductCard;
