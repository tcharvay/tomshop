import data from '../data/productos.json'



const pedirItemPorId = (id) => {
    return new Promise ( (resolve, reject) => {

        const item = data.find( (el) => el.id === id);

        if (item) {
            resolve(item);

        } else {
            reject (
                {
                    error: 'Product missing'
                }
            )
        }
    })
}

export default pedirItemPorId;