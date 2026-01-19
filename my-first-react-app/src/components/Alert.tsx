type AlertType = "success" | "error" | "warning" | "info";

interface alertProps {
    type: AlertType;
    title?: string;
    children?: React.ReactNode;
}

const Alert = ({type, title, children }: alertProps) => {
  return (
    <div className={`alert alert-${type}`}>
        {title && <h4 className="alert-title">{title}</h4>}
        {children}
    </div>
  );
}

export default Alert;