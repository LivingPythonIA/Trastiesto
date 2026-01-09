import { useCartContext } from "../../context/CartContext/useCartContext";
import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./Cart.css";

export const Cart = () => {
  const { cart, clearCart, deleteItem, total } = useCartContext();

  // 👉 CAMBIÁ ESTE NÚMERO POR EL TUYO
  const phoneNumber = "5491162239296";

  const buildWhatsAppMessage = () => {
    let message = "Hola! 👋%0A";
    message += "Te escribo desde Trastiesto.%0A%0A";
    message += "Me interesan los siguientes productos:%0A%0A";

    cart.forEach((prod) => {
      message += `• ${prod.name} (x${prod.quantity}) - $${prod.price}%0A`;
    });

    message += `%0ATotal estimado: $${total().toLocaleString("es-AR")}`;
    message += "%0A%0AQuedo a la espera, gracias 🙂";

    return message;
  };

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${buildWhatsAppMessage()}`;

  return (
    <section>
      <h2>Tu interés</h2>

      <div className="carrito-container">
        {cart.length ? (
          cart.map((prod) => (
            <Item key={prod.id} {...prod}>
              <p>Cantidad: {prod.quantity}</p>
              <button
                className="btn"
                onClick={() => deleteItem(prod.id)}
              >
                Quitar
              </button>
            </Item>
          ))
        ) : (
          <p className="msg-cart-vacio">
            Todavía no seleccionaste productos 😟
          </p>
        )}
      </div>

      {cart.length ? (
        <div className="btn-container">
          <div className="total-pagar">
            <p>Total estimado: ${total().toLocaleString("es-AR")}</p>
            <small>Los precios se confirman por mensaje</small>
            <small className="reserva-aviso">Reservas por mensaje</small>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            💬 Hablar por WhatsApp
          </a>

          <button className="btn" onClick={clearCart}>
            Vaciar lista
          </button>
        </div>
      ) : (
        <Link className="btn btn-volver" to="/">
          Volver al inicio
        </Link>
      )}
    </section>
  );
};
