import React from 'react';
import {Link, NavLink} from 'react-router-dom';
//Estilo//
import './NavBar.css';
//Components//
import CartWidget from './CartWidget.js';

class NavBar extends React.Component {

    constructor (){
      super();
      this.state = {
        uno : "about",
        dos : "support",
        tres : "cart",
      }
    }

    render(){

    const {uno, dos, tres} = this.state

    return (
         <nav>
             <div class="nav-wrapper">
               <Link to="/" class="brand-logo">ANM</Link>
               <ul id="nav-mobile" class="right hide-on-med-and-down">
                   <li><NavLink to={`/${uno}`}>About</NavLink></li>
                   <li><NavLink to={`/${dos}`}>Support</NavLink></li>
                   <li id="cart">
                     <NavLink to={`/${tres}`}><CartWidget /></NavLink>
                     </li>
               </ul>
             </div>
         </nav>
    );
  }
}

  export default NavBar;