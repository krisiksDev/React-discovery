interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ label, onClick, variant }: ButtonProps) => {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
    >{label}</button>
  );
};

export default Button;
