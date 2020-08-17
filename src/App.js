import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable';


function App() {
  const products=[{
    nom:"pull",
    prix:200,
    category:"vetement"

  },{
    nom:"machine",
    prix:200,
    category:"electronique"
  }]
  return (<>
  <ProductTable prod={products} x="hello"/>
  </>

  );
}

export default App;
