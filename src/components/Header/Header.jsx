import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span role="img" aria-label="bolsa de compras">🛍️</span>
          <span className="logo-text">Trastiesto</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
};
