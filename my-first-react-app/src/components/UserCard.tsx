interface UserCardProps {
    name: string;
    role: string;
}

const UserCard = ({name, role} : UserCardProps) => {
    return (
        <div className = "user-card">
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
};

export default UserCard;