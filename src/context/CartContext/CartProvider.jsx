import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Verificar si el producto ya está en la lista
  const exists = (id) => cart.some((p) => p.id === id);

  // Agregar producto único
  const addItem = (item) => {
    if (exists(item.id)) {
      alert("Este producto ya está en tu lista de interés");
      return;
    }

    setCart((prev) => [...prev, item]);
  };

  // Eliminar producto
  const deleteItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Vaciar lista
  const clearCart = () => setCart([]);

  // Cantidad total de productos
  const getTotalItems = () => cart.length;

  // Total estimado (opcional)
  const total = () =>
    Math.round(cart.reduce((acc, p) => acc + p.price, 0) * 100) / 100;

  const values = {
    cart,
    addItem,
    deleteItem,
    clearCart,
    getTotalItems,
    total,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};
