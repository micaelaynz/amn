import React from "react";
import {Link, NavLink} from 'react-router-dom';
//Estilo//
import './NavBar.css';
//Components//
import CartWidget from './CartWidget.js';

function NavBar () {
    return (
         <nav>
             <div className="nav-wrapper">
               <Link to="/" className="brand-logo">ANM</Link>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                   <li><NavLink to={`/shop`}>Shop</NavLink></li>
                   <li><NavLink to={`/support`}>Support</NavLink></li>
                   <li id="cart">
                    <Link to={`/cart`}><CartWidget /></Link> 
                     </li>
               </ul>
             </div>
          </nav>
            ) 
        }

  export default NavBar;