//npm install -g typescript
//tsc persona.ts
//tsc - w persona.ts //para que quede compilando
var numero;
numero = 12;
function sumar(num1, num2) {
    return num1 + num2;
}
function sumarOpcion(num1, num2) {
    return num1 + num2;
}
alert(sumar(numero, 5));
function nombres(nombres) {
}
var nomb = ["Juan", "pepe"];
nombres(nomb);
function nombresArray() {
    var nombres = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nombres[_i] = arguments[_i];
    }
}
nombresArray("Juan", "pepe");
