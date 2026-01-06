// 🎯 EXERCICE 2.2 - Solution: Card.tsx

import React from "react";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  footer,
}) => {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      )}

      <div className="card-content p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>

      {footer && (
        <div className="card-footer border-t p-4 bg-gray-50">{footer}</div>
      )}
    </div>
  );
};
 