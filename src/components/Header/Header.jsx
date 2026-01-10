import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Ir al inicio">
          <img
            src="/logo-trastiesto.png"
            alt="Trastiesto"
            className="logo-img"
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
};
