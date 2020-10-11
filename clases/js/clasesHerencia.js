// antigua manera de declarar clases en javascript con el object constructor:

// function Tarea() {
//     this.nommre = nombre;
//********************************************************************************************
//clases en programacion orientada a clases en javascript
// export const nombreTarea = 'Pasear al perro';
// export const crearTarea =(tarea, urgencia) => {
//     return `La tarea ${tarea} tiene una urgencia ${urgencia}`;
// } 

export default class Tarea{
    //Esto es lo que se va a ejecutar primero al instanciar una clase
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // cuando declaras una funcion dentro de una clase se convierte en metodo de la clase
    mostrar(){
          console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        }
}

// //Crear los objecto
// //Con la palabra new creamos una nueva instancia de un nuevo objecto de la clase Tarea
// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
// tarea1.mostrar() 

// //Compras 
// let compras = new ComprasPendientes('Comprar Jabon','urgente', 3);
// compras.mostrar()

// console.log(compras.hola())