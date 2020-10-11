import React from 'react';
//Antes de usaban clases para crear componentes, ahora se usan funciones function declaration

function Header({titulo, fecha}){
    return(
    <h1 className='encabezado'>{titulo} {fecha}</h1>
    )
}

export default Header;