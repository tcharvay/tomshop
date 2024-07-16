import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pedirItemPorId from "./pedirItemPorId";
import ItemDetail from "./ItemDetail";
import "../styles/itemDet.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <div className="item-det">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
