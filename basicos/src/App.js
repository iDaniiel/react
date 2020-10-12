import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  
  //crear listado de prodcutos 
  const [productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa reactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);
//Sate para un carrito de compras
  const [carrito, agregarProdcuto] = useState([

  ]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
          titulo='Tienda Virtual' 
          fecha={fecha}
        />

        <h1>Lista de prodcutos</h1>
        { productos.map(producto => (
          <Producto 
            key={producto.id} 
            producto={producto}
            carrito={carrito}
            agregarProdcuto={agregarProdcuto}
            productos={productos}/>
        ))}

        <Carrito 
            carrito={carrito} 
            agregarProdcuto={agregarProdcuto} 
        />
      <Footer />
    </Fragment>
  );
}

export default App;
