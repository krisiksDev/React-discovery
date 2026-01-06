interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card = ({title, children}: CardProps) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">{children}</div>
        </div>
    );
};

export default Card;