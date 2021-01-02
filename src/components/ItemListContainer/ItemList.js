import React, {useState, useEffect} from 'react';
import { productDetails } from './Item.js';
import {Link} from 'react-router-dom';
//Estilo//
import './ItemList.css';

const ItemList = () => {
    const [product, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
           const promise = new Promise((resolve, reject) => {
               resolve(productDetails);
           });
           promise.then(productDetails => {
               setItem(productDetails);
           })
        }, 1000);
    },[])

    return(
        <>
         {product.map((e) => {
             return(
                 <div key={e.id} id="products" class="row">
                         <div class="col s12">
                             <div class="card">
                                 <div class="card-image">
                                   <Link to={`/products/${e.id}`}>
                                     <img src={e.pictureUrl} /> </Link>      
                                        <span class="card-title">{e.name}</span>
                                           <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">+</i></a>
                                 </div>
                                 <div class="card-content">  
                                   <p>${e.price}</p>
                                   <p>{e.description}</p>
                                 </div>
                            </div>
                         </div>  
                  </div>               
             )
         }
         )}
        </>
    )

}

export default ItemList;