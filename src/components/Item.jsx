import React from "react";
import '../styles/item.css';
import { Link } from "react-router-dom";
export default function Item({producto}) {
  return (
    <div className='item-card'>
      <h2>{/*producto.title*/}</h2>
      <p>{/*producto.brand*/}</p>
      <img src={producto.image} alt="" />
      <p>Price $:{producto.price}</p>
      <p>{producto.description}</p>
      <Link className=" View" to={`/item/${producto.id}`}>View</Link>

    </div>
  );
}
