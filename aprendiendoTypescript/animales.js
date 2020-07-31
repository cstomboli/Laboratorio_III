//class Perro extends Animal implement Otre
var Perro = /** @class */ (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.hacerRuido = function () {
        console.log(this.nombre + " guau");
    };
    return Perro;
}());
var cacho = new Perro("cacvho");
var miPerro = new Perro();
var animales = new Array();
animales.push(cacho);
animales.push(miPerro);
animales.forEach(function (animal) {
    animal.hacerRuido();
});
