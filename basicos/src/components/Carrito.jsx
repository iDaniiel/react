import React from 'react';
import './carrito.css';
import Producto from './Producto';


const Carrito = ({carrito, agregarProdcuto}) => (
    <div className='carrito'>
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
        ? 
            <p>No hay prodcutos en el carrito</p>
        :         
            carrito.map(producto => (
                <Producto 
                    key={producto.id} 
                    producto={producto}
                    carrito={carrito}
                    agregarProdcuto={agregarProdcuto}/>
            ))
        
        }
    </div>
);
 
export default Carrito;