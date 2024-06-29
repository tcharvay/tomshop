import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <i className="fa-solid fa-cart-shopping"></i>
      <p>
        <Link to="/CartContainer">{calcularCantidad()}</Link>
      </p>
    </div>
  );
};
