interface CardImageProps {
  src: string;
  alt: string;
}

const CardImage = ({ src, alt }: CardImageProps) => {
  return <img className="card-image" src={src} alt={alt} />;
};

export default CardImage;
