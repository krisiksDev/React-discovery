import type { ReactNode } from "react";

interface CardContainerProps {
  title: string;
  children: ReactNode;
}

const CardContainer = ({ title, children }: CardContainerProps) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardContainer;
