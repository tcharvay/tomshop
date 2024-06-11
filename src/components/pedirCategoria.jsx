import data from "../data/productos.json";

const CategoryRequest = (category) => {

    
  return new Promise((resolve, reject) => {

    const filterResults = data.filter((el) => el.category === category);

    console.log(filterResults)

    if (filterResults) {
      resolve(filterResults);
    } else {
      reject({
        error: "Category not found",
      });
    }
  });
};

export default CategoryRequest;
