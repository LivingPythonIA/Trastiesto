import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        {/* NAV A LA IZQUIERDA */}
        <Nav />

        {/* LOGO A LA DERECHA */}
        <Link to="/" className="header-brand">
          <img
            src="/logo-trastiesto.png"
            alt="Trastiesto icono"
            className="logo-icon"
          />

          <img
            src="/logo-nombre.png"
            alt="Trastiesto"
            className="logo-nombre-header"
          />
        </Link>

      </div>
    </header>
  );
};
