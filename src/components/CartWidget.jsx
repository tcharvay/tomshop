import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import '../styles/CartWidget.css'

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <i className="fa-solid fa-cart-shopping"></i>
      <p >
        <Link to="/CartContainer" className="counter">{calcularCantidad()}</Link>
      </p>
    </div>
  );
};
