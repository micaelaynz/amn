import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { productDetails} from '../ItemListContainer/Item.js';

const ItemDetail = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        setTimeout(() => {
           const promise = new Promise((resolve, reject) => {
               resolve(productDetails);
           });
           promise.then(productDetails => {
               setItem(productDetails);
           })
        }, 500);
    },[id])

    return(
        <div>
        {item.length == 0 ?
            (<p>Loading...</p>)
            :item.map((e) => {
                return(
                    e.id === id ?
                    <div key={e.id}>
                        <div id="cover">
                            <img src= {e.pictureUrl} />
                        </div>
                        <div id="product">
                            <h2>{e.name}</h2>
                            <p>${e.prie}</p>
                            <p>{e.decription}</p>
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