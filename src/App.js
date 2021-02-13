import React, {useEffect} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Estilo//
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
//Components//
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
//Context//
import {ProductContextProvider} from './components/Context/ProductContext';
import {CartContextProvider} from './components/Context/CartContext';

function App () {

  return (
    <BrowserRouter>
    <ProductContextProvider>
    <CartContextProvider>
    <div className="App">
    <NavBar />
    <Switch>
    <Route path="/shop">
    <ItemListContainer />
    </Route>
    <Route path="/:category/:id">
    <ItemDetailContainer />
    </Route>
    </Switch>
    </div>
    </CartContextProvider>
    </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
