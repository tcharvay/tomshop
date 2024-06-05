import { useState, useEffect} from 'react';
import pedirProductos from './pedirProductos';
import ItemList from './ItemList';
import '../styles/ItemList.css';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos)

    useEffect( () => {

        pedirProductos()
            .then((res) => {
                setProductos(res);
                console.log(productos)
        })
    }, [])

    return (
        < ItemList productos={productos} />
    )
};

export default ItemListContainer;