import type { ReactNode } from "react";

interface CardActionsProps {
  children: ReactNode;
}

const CardActions = ({ children }: CardActionsProps) => {
  return <div className="card-actions">{children}</div>;
};

export default CardActions;
