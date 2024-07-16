import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import '../styles/cartContainer.css'
import FormComponent from "./PaymentForm";

const checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="cart-content">
      <p className="checkout-title">Checkout</p>  
      {carrito.map((prod) => <p> {prod.description} - Price ${prod.price}</p>)}
      {
        carrito.length > 0 ?
            <div className="checkout">
                <p className="total"> Total: ${calcularTotal()}</p>
                <FormComponent />
                <div className="div-cancel-btn">
                  <button className='cancel-btn'onClick={handleVaciar}>Cancel</button>
                </div>
            </div> :
            <p>Purchase canceled</p>
      }
    </div>
  )
}

export default checkout