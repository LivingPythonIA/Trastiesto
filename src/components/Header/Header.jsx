import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        <Link to="/" className="header-brand">
          {/* LOGO NOMBRE PRIMERO */}
          <img
            src="/logo-nombre.png"
            alt="Trastiesto"
            className="logo-nombre-header"
          />

          {/* LOGO REDONDO A LA DERECHA */}
          <img
            src="/logo-trastiesto.png"
            alt="Trastiesto icono"
            className="logo-icon"
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
};
