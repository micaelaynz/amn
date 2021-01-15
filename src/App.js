import React, {useEffect} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
//Estilo//
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
//Components//
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import {ProductContextProvider} from './components/Context/ProductContext';
import {CartContextProvider} from './components/Context/CartContext';

function App () {

  useEffect(() => {
        
  }, [])

  return (
    <BrowserRouter>
    <ProductContextProvider>
    <CartContextProvider>
    <Route exact path="/">
    <NavBar />
    </Route>
    <Route exact path="/shop">
    <ItemListContainer />
    </Route>
    <ItemDetailContainer />
    </CartContextProvider>
    </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
