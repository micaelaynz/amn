import React, {useState, useContext} from 'react';
import ProductContext from '../Context/ProductContext';
import CartContext from '../Context/CartContext';
import {Link} from 'react-router-dom';

function ItemCount(){
    
    const stock = useContext(ProductContext).stock
    console.log(process.env.REACT_APP_apiKey)
    
    const initial = 1;
    const [number, setNumber] = React.useState(initial);
    const itemStock = stock; 

    const [empty, setEmpty] = useState("");
    const [showing, setShowing] = useState(false);

    //Funciones y elementos del Context:
    
    const { addProduct } = useContext(CartContext);
    

function more(){
    if(number < itemStock){ 
    setNumber(number + 1);
    return;
    } if(itemStock === 0){
        setEmpty("¡Nos quedamos sin stock!")
    } 
}

function less(){
    if(number > itemStock){
    setNumber(number - 1);
    return;
    }
}

function add(){
    setShowing({ showing: !showing });
    addProduct(number);
}

    return(
        <>
        <div id="container">
            <button id="left" className="button" onClick={less}>-</button>
            <p id="quantity">{number}</p>
            <button id="right" className="button" onClick={more}>+</button>
        </div>
        <div id="secondContainer">
    { showing
    ? <Link to="/carrito"><button className="toCart">Terminar Compra</button></Link>
    : <button className="toCart" onClick={add}>Agregar al Carrito</button>
    }
        </div>
        <div className="empty">{empty}</div>
        </>
    )
}

export default ItemCount;