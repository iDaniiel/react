import React from 'react'

const Producto = ({producto,carrito,agregarProdcuto,productos}) => {
    const {id, nombre, precio} = producto;

    //agregar prodcuto al carrito
    const seleccionarCarrito = id => {
        //filter nos retorna un arreglo nuevo del prodcuto encontrado
        //filter es un array metodh
        const producto = productos.filter(producto => producto.id === id)[0]
        agregarProdcuto([
            ...carrito, producto
        ])
    }

    //Elimina un prodcuto del carrito
    const eliminarProdcuto = id => {
        console.log(carrito)
        const producto = carrito.filter(producto => producto.id !== id);
        console.log(producto)
        agregarProdcuto(producto)
    }

    return ( 
            <div>
                <h2>{nombre}</h2>
                <p>${precio}</p>

                {productos
                ?
                    (
                        <button
                            type='button'
                            onClick={() => seleccionarCarrito(id)}
                        >Comprar
                        </button>
                    )
                :  
                    (
                        <button
                            type='button'
                            onClick={() => eliminarProdcuto(id)}
                        >Eliminar
                        </button>
                    )        
                }
            </div>
        );
}

//En JavaScript par agregar un evento a un elemento se selecciona su Id como por ejemplo:
//HTML:
// <button id='buton1'>Este es un boton</button>
//JavaScript
//  const evento = document.querySelector('#buton1').addEventListener('click', funcion )
 
export default Producto;