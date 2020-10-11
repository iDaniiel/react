const descargarUsuarios = cantidad => new Promise( (resolve, reject) => {
    
    const urlApi = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    const xhr = new XMLHttpRequest();
    // abrimos la conexion 
    xhr.open('GET', urlApi, true);

    xhr.onload = () => {
        if(xhr.status === 200){
            resolve( JSON.parse(xhr.responseText).results);
        }else{
            reject( Error( xhr.statusText));
        }
    }

    xhr.onerror = (error) => reject(error) 

    xhr.send()

} )


descargarUsuarios(10)
    .then(
        miembros => imprimirHTML( miembros),
        error => console.log(
            new Error('Hubo un error' + error)
        )
    );
function imprimirHTML( usuario ) {
    let html = ''
    usuario.forEach(element => {
        html += `
            <li>
                Nombre: ${ element.name.first } ${ element.name.last }
                Pais: ${ element.nat }
                Imagen: <img src="${element.picture.medium }" />
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}