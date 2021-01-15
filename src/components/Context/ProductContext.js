import React, {createContext, useState, useEffect} from 'react';
import { products } from '../ItemListContainer/Item';

const ProductContext = createContext();

function ProductContextProvider({children}) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const promise = new Promise((resolve, reject) => {
                resolve(products);
            });
            promise.then(products => {
                setProduct(products);
            })
        }, 100);
    },[])

    return(
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;
export {ProductContextProvider};