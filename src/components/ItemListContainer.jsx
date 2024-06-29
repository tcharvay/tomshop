import { useState, useEffect} from 'react';
import pedirProductos from './pedirProductos';
import ItemList from './ItemList';
import '../styles/ItemList.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const {category} = useParams();
    const [productos, setProductos] = useState([]);   
       

    useEffect( () => {

        const productosRef = collection(db, "productos");        
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

        getDocs(q)
            .then((res) =>  
                {
                    setProductos(
                        res.docs.map((doc => {
                            return {...doc.data(), id: doc.id}
                        })
                    )
                    )
                }) 
           }, [category])

    /*
    useEffect( () => {

        pedirProductos(category)
            .then((res) => {
                setProductos(res);
                console.log(productos)
        })
    }, [category])*/

    return (
        < ItemList productos={productos} />
    )
};

export default ItemListContainer;