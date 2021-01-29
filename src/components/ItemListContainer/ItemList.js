import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//Context//
import ProductContext from '../Context/ProductContext';
//Estilo//
import './ItemList.css';

function ItemList () {

    const product = useContext(ProductContext)

     return(
      <>
      {product.map((e) => {

           return(

              <div className="row" key={e.id} id="products">
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                  <Link to={`/${e.category}/${e.id}`}><img src={e.pictureUrl}></img></Link> </div>
                  <div className="card-content">
                    <Link><span class="card-title"><h4>{e.name}</h4></span></Link>
                    <Link to={`/${e.category}/${e.id}`}>
                    <p>${e.price}</p></Link>
                  </div>
                 <div className="card-action">
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