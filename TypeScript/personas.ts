//npm install -g typescript 
// tsc personas.ts

//queda como mirando el archivo todo el tiempo
// tsc -w personas.ts en vez de tsc personas.ts

var numero:number;

numero=10;

function sumar(num1:number, num2:number)
{
    return num1+num2;
}

alert(sumar(numero, 10));

class Empleado{
    private nombre:string;
    private salario:number;

    constructor(nombre:string, salario:number)
    {
        this.nombre=nombre;
        this.salario=salario;
    }

    //getNombre():string{ SE PUEDE ESCRIBIR DE ESTAS DOS FORMAS
    getNombre(){
        return this.nombre;
    }

    toString(){
        return "Nombre: "+this.nombre+", Salario: "+this.salario;
    }
}

class Persona{
    private nombre:string;

    public setNombre(non:string){
        this.nombre=non;
    }
    public getNombre(){
        return this.nombre;
    }
}

