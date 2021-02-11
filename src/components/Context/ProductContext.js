import React, {createContext, useState, useEffect} from 'react';
import {getFirestore} from '../../Firebase.js';


const ProductContext = createContext();

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const ItemCollection = db.collection("items");
        const query = ItemCollection.get();

      //  const selectedCategory = ItemCollection.where('category', '==', 'Tor-Books');

     //   const categoryCollection = db.collection("categories");
       // const ask = categoryCollection.get();

        query
        .then((resultado) => {
            resultado.docs.map((doc) => console.log(doc))
            setProduct(resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })));
        })
        .catch((error) => {
            console.log(error)
        })

       /* selectedCategory.get().then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setItems(data);
        })
        .catch((error) => {
            console.log(error)
        })*/

      /*  ask
        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setCategories(data);
        })
        .catch((error) => {
            console.log(error)
        })*/

    },[]);
    

    return(
        <ProductContext.Provider value={{product, items, categories}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
export {ProductContextProvider};