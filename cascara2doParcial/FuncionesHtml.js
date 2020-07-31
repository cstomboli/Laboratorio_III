var general;
(function (general) {
    var listaVehiculos = new Array();
    function agregar() {
        var marca;
        var modelo;
        var precio;
        var id;
        //logica, si es auto o camioneta
        if (general.Auto) // tipo == Auto)
         {
            var cantidadPuertas;
            var nuevoAuto = new general.Auto(id, marca, modelo, precio, cantidadPuertas);
        }
        if (general.Camioneta) // tipo == Auto)
         {
            var cuatroXcuatro;
        }
    }
    general.agregar = agregar;
    function eliminar() {
    }
    general.eliminar = eliminar;
})(general || (general = {}));
