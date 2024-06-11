import data from '../data/productos.json'

const pedirProductos = (category) => {




    return new Promise ((resolve) => {

        let result = data;

        if (category){
            const categ = category.toLowerCase();

            result = data.filter ((el) => el.category.toLowerCase() === categ)
   
        }                     
        
        
        resolve (result)
    })
}



export default pedirProductos;