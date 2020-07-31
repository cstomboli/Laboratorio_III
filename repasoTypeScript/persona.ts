//npm install -g typescript
//tsc persona.ts
//tsc - w persona.ts //para que quede compilando

var numero:number;

numero=12;

function sumar(num1:number, num2:number)
{
    return num1+num2;
}

function sumarOpcion(num1?:number, num2?:number) //PArametro opcional
{
    return num1+num2;
}
alert(sumar(numero, 5));

function nombres(nombres:string[]) 
{
}
var nomb= ["Juan", "pepe"];
nombres(nomb);
function nombresArray(...nombres:string[]) 
{
}
nombresArray("Juan", "pepe");
