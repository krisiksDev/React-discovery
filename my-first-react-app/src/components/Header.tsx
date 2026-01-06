interface HeaderProps {
  title: string;
  showLogo: boolean;
}

const Header = ({ title, showLogo }: HeaderProps) => {
  return (
    <header className="header">
      {showLogo && <span className="logo"></span>}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
