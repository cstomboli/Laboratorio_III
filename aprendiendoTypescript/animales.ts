interface Animal
// class abstract Animal
{
    nombre:string;
    hacerRuido():void; //Interface solo tiene la firma
}

//class Perro extends Animal implement Otre
class Perro implements Animal
{
    public nombre:string;

    constructor(nombre?:string){
        this.nombre=nombre;
    }

    hacerRuido():void
    {
        console.log(this.nombre+" guau");
    }
}

var cacho:Perro = new Perro("cacvho");
var miPerro:Perro = new Perro();

var animales:Array<Animal> = new Array<Animal>();

animales.push(cacho);
animales.push(miPerro);

animales.forEach(function(animal:Animal){
    animal.hacerRuido();
});

