// 🎯 EXERCICE 3.2 - Solution: CardContainer.tsx

import React from "react";

interface CardContainerProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
};
 