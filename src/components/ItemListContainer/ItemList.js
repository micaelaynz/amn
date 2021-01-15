import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

function ItemList () {

    const product = useContext(ProductContext)

     return(
      <>
      {product.map((e) => {

           return(

              <div class="row" key={e.id}>
              <div class="col s12 m7">
                <div class="card">
                  <div class="card-image">
                  <Link to={`/itemDetailContainer/${e.category}/${e.id}`}><img src={e.pictureUrl}></img>
                       <span class="card-title">{e.name}</span></Link>
                    </div>
                  <div class="card-content">
                    <Link to={`/itemDetailContainer/${e.category}/${e.id}`}>
                    <p>${e.price}</p>
                    <p>Details</p></Link>
                  </div>
                 <div class="card-action">
                 <a href="#">Add to cart</a>
                </div>
              </div>
              </div>
              </div> 
               )
         })
        }   
     </>         
   )
 }

export default ItemList;