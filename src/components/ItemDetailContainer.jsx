import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pedirItemPorId from "./pedirItemPorId";
import ItemDetail from "./ItemDetail";
import '../styles/itemDet.css'




const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);

    const idNumb = parseInt(id, 10);

    if (idNumb) {
      pedirItemPorId(idNumb)
        .then((res) => {
          setProducto(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="item-det">
    <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
