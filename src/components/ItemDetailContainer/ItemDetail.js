import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {productDetail} from '../ItemDetailContainer/ProductDetail.js';

const ItemDetail = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
           const promise = new Promise((resolve, reject) => {
               resolve(productDetail);
           });
           promise.then(productDetail => {
               setItem(productDetail);
           })
        }, 500);
    },[id])

    return(
        <div>
        {item.length === 0 ?
            (<p>Loading...</p>)
            :item.map((e) => {
                return(
                    e.id === id ?
                    <div key={e.id} id="products" class="row">
                    <div class="col-md-12">
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
                    </div> : null 
                    )
                 }
            )
        }
        </div>
    )
}

export default ItemDetail;