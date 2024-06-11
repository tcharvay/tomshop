import { useState, useEffect} from 'react';
import pedirProductos from './pedirProductos';
import ItemList from './ItemList';
import '../styles/ItemList.css';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos)

    const{category} = useParams();
    
    

    useEffect( () => {

        pedirProductos(category)
            .then((res) => {
                setProductos(res);
                console.log(productos)
        })
    }, [category])

    return (
        < ItemList productos={productos} />
    )
};

export default ItemListContainer;