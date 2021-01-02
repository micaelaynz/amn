import React from 'react';
import { BrowserRouter} from 'react-router-dom';
//Estilo//
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.css';
//Components//
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <ItemListContainer />
    <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
