import React, {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import CartForms from '../CartForms/CartForms';
import {Link} from 'react-router-dom';
import './cartStyles.css';

function CartView() {

    const { products, delProduct, clearCart, getGrandTotal, productsCount } = useContext(CartContext);

    const handleDel = (p) => {
        delProduct(p.id);
    };

    return(
        <>
        <div className="CartContainer">
        <div className="wholeCart">
        <div className="buttonBack">
            <Link to="/">
            <button className="cartButton">Volver</button>
            </Link>
            <button className="cartButton" onClick={clearCart}>Borrar todo</button>
        </div>
        <div className="titleCartContainer"><h3>Tu carrito de Compras</h3></div>
        {products.length === 0 ?
            (
                <>
                <h1>My Cart</h1>
                <h3>Your cart is emtpy</h3>
                <button><Link to="/shop">SHOP NOW</Link></button>
                </>
                )
            :products.map((product) => {
                return(
                    <>
                    <div class="cart_bar">
								<ul className="cart_bar_list item_list d-flex flex-row align-items-center justify-content-end">
									<li className="mr-auto">Product</li>					
									<li>Price</li>
									<li>Quantity</li>
									<li>Total</li>
								</ul>
							</div>
                            <div className="cart_items">
								<ul className="cart_items_list">
									<li className="cart_item item_list d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-end justify-content-start">
										<div className="product d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start mr-auto">
											<div><div class="product_number">1</div></div>
											<div><div class="product_image"><img src="images/cart_item_1.jpg" alt=""></div></div>
											<div class="product_name_container">
												<div class="product_name"><a href="product.html">Cool Flufy Clothing without Stripes</a></div>
												<div class="product_text">Second line for additional info</div>
											</div>
										</div>
										<div class="product_color product_text"><span>Color: </span>beige</div>
										<div class="product_size product_text"><span>Size: </span>L</div>
										<div class="product_price product_text"><span>Price: </span>$3.99</div>
										<div class="product_quantity_container">
											<div class="product_quantity ml-lg-auto mr-lg-auto text-center">
												<span class="product_text product_num">1</span>
												<div class="qty_sub qty_button trans_200 text-center"><span>-</span></div>
												<div class="qty_add qty_button trans_200 text-center"><span>+</span></div>
											</div>
										</div>
										<div class="product_total product_text"><span>Total: </span>$3.99</div>
									</li>
								</ul>
							</div>
                            </div>
                    <div className="dataContainer" key={product.id}>
                        <p className="cartText">Id de tu producto: {product.id}</p>
                        <p className="cartText">Cantidad: {product.number}</p>
                        <p className="cartText">Título: {product.title}</p>
                        <p className="cartText">Precio por unidad: ${product.price}</p>
                        <p className="cartText">Precio Total: ${product.price * product.number}</p>
                        <button className="deleteButton" onClick={() => handleDel(product)}>X</button>
                    </div> 
                    </>
                )
            })
            }
        </div>
        <div className="totals">
            <p>Cantidad de Productos:</p>
            <p>{productsCount()}</p>
            <p>Total Compra:</p>
            <p>${getGrandTotal()}</p>
        </div>
        </div>
        <div>
            <CartForms />
        </div>
        </>
    )
}

export default CartView; 