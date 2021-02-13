import React, {useContext} from 'react';
import {useParams, Link} from 'react-router-dom';
import ProductContext from '../Context/ProductContext';
import ItemCount from '../ItemCount/ItemCount.js';

function ItemDetail () {
 
    const  product = useContext(ProductContext).product;

    const {id} = useParams();

    return(
        <div>
        {product.length === 0 ?
            (<p>Loading</p>)
            :product.map((e) => {
                return(
                    e.id === id ?
         <div className="Container" key={e.id}>        
            <div className="itemDetailContainer">
                <div className="productContainer">
                    <div className="row">
                         <div className="col-lg-6">
                      <img src= {e.pictureUrl} />
                    </div>
                    <div className="col-lg-6 product_col">
						<div className="product_info">
							<div className="product_name">{e.name}</div>
							<div className="product_price">$<span>{e.price}</span></div>
                            <div className="product_text">
								<p>{e.description}</p>
							</div>
                            <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
										<ItemCount />
									</div>
                        </div>
                     </div>
                    </div>
                </div>
            </div>
        </div> : null
                )  
            })
            }
        </div>
        )

}

export default ItemDetail;