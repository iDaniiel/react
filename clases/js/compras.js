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