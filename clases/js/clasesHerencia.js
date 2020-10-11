// antigua manera de declarar clases en javascript con el object constructor:

// function Tarea() {
//     this.nommre = nombre;
//********************************************************************************************
//clases en programacion orientada a clases en javascript
class Tarea{
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

class ComprasPendientes extends Tarea {
    constructor( nombre, prioridad, cantidad){
        super(nombre, prioridad)
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar()
        console.log( ` con cantidad ${this.cantidad}`);
     }

     hola(){
        return 'Hola';
     }
}

//Crear los objecto
//Con la palabra new creamos una nueva instancia de un nuevo objecto de la clase Tarea
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
tarea1.mostrar() 

//Compras 
let compras = new ComprasPendientes('Comprar Jabon','urgente', 3);
compras.mostrar()

console.log(compras.hola())