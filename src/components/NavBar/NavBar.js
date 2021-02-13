import React from "react";
import {Link, NavLink} from 'react-router-dom';
//Estilo//
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
import { Navbar, Icon, Dropdown } from 'react-materialize';
import '../../style.css';
//Components//
import CartWidget from './CartWidget.js';

function NavBar () {
  return (
      <Navbar className="home-nav"
      alignLinks="right"
      brand={<Link to={"/"}>ANM</Link>}>
      <NavLink to="/">Contact us</NavLink>
      <Dropdown
      id="Dropdown_6"
      options={{
      alignment: 'left',
      autoTrigger: true,
      closeOnClick: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      hover: false,
      inDuration: 150,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 250}}
      trigger={<a href="#!">{' '}<Icon right>Categories</Icon></a>}>   
      </Dropdown>
      <NavLink to="/cart">
      <CartWidget />
      </NavLink>
      </Navbar>
  )
}

/* { categories.map( category => <Link to={`/category/${category.category}`}>
<p>{category.name}</p>
</Link>)} */ 
  export default NavBar;