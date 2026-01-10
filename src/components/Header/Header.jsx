import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="/logo-trastiesto.png"
            alt="Trastiesto"
            className="logo-img"
          />
          <span className="logo-text">Trastiesto</span>
        </Link>

        <Nav />
      </div>
    </header>
  );
};
