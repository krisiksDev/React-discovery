interface LoginStatusProps {
  isLoading?: boolean;
  error: string | null;
  user: {name : string} | null;
  onLogin: () => void;
  onLogout: () => void;
}

const LoginStatus = ({
    isLoading,
    error,
    user,
    onLogin,
    onLogout,
}: LoginStatusProps) => {
  if (error) {
    return <div className="login-status error">Error: {error}</div>;
  }
    if (isLoading) {
    return (
        <div className="login-status loading">
            <p>Loading...</p>
        </div>
    );
  }
    if (user) {
    return (
        <div className="login-status logged-in">
            <p>Welcome, {user.name}!</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
  } else {
    return (
    <div className="login-status guest">
        <p>Please log in to continue.</p>
        <button onClick={onLogin}>Login</button>
    </div>
  );
}
};
export default LoginStatus;