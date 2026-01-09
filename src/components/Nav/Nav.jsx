import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/category/Nuevo">Nuevo</Link>
        </li>

        <li>
          <Link to="/category/Usado">Usado</Link>
        </li>

        <li className="nav-cart">
          <Link to="/carrito" className="icons-cart">
            🛒
          </Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};
