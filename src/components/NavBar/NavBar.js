import React from "react";
import {Link, NavLink} from 'react-router-dom';
//Estilo//
import 'materialize-css/dist/css/materialize.min.css'
import './NavBar.css';

//Components//
import CartWidget from './CartWidget.js';
//IMG//
import 'fire.svg';

function NavBar () {

    return (
         <nav>
             <div className="nav-wrapper">
               <Link to="/" className="brand-logo"><img src="./fire.svg"></img></Link>
                 <Link to="/" className="brand-logo">ANM</Link>	 
                 <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><div class="input-field col s12">
  <select className="browser-default">
    <option value="" disabled selected>Categories</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div></li>
                   <li><NavLink to={`/shop`}>Shop</NavLink></li>
                   <li><NavLink to={`/support`}>Support</NavLink></li>
                   <li id="cart">
                    <Link to={`/cart`}><CartWidget /></Link> </li>
                 </ul>
               </div>
          </nav>
            ) 
        }
      

  export default NavBar;