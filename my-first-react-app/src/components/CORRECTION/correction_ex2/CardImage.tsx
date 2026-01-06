// 🎯 EXERCICE 3.2 - Solution: CardImage.tsx

import React from "react";

interface CardImageProps {
  src: string;
  alt: string;
  height?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  height = "200px",
}) => {
  return (
    <div className="card-image" style={{ height, overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
    </div>
  );
};
 