import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductContext from '../Context/ProductContext';

function ItemDetail () {
 
    const  product = useContext(ProductContext);

    const {id} = useParams();

    return(
        <div>
        {product.length === 0 ?
            (<p>Loading</p>)
            :product.map((e) => {
                return(
                    e.id === id ?
                    <div className="Container" key={e.id}>        
            <div id="itemDetailContainer">
            <div>
                <div id="productContainer">
                <img src= {e.pictureUrl} />
                </div>
                <div>
                
                </div>
            </div>
            <div id="content">
                <h2 className="details">{e.name}</h2>
                
            </div>
            </div>
            <div className="abstractContainer">
                <h4 id="abstractTitle">Resumen:</h4>
                <p id="abstractText">{e.abstract}</p>
            </div>
        </div> : null
                )  
            })
            }
        </div>
        )

}

export default ItemDetail;