// 🎯 EXERCICE 3.2 - Solution: CardActions.tsx

import React from "react";

interface CardActionsProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
}

export const CardActions: React.FC<CardActionsProps> = ({
  children,
  align = "right",
}) => {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={`flex gap-2 px-6 py-4 border-t border-gray-200 bg-gray-50 ${alignmentClasses[align]}`}
    >
      {children}
    </div>
  );
};
 