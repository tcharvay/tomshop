import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import '../styles/cartContainer.css'

const Carrito = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="cart-content">
      {carrito.map((prod) => <p> {prod.description} - Price ${prod.price}</p>)}
      {
        carrito.length > 0 ?
            <div className="checkout">
                <p className="total"> Total: ${calcularTotal()}</p>
                <div>
                  <button className='empty-btn'onClick={handleVaciar}>Empty Cart</button>
                  <button className="checkout-btn"><Link className='checkout-link'to="/checkout">Checkout</Link></button>
                </div>
            </div> :
            <p>Cart Empty</p>
      }
    </div>
  )
}

export default Carrito
