namespace general
{
    var listaVehiculos:Array<Vehiculo> = new Array<Vehiculo>();

    window.onload = function()
    {
        document.getElementById("btnMostrar")?.addEventListener("click",mostraRecuadro);

    }

    export function mostraRecuadro()
    {
        var container:any = document.getElementById("container");
        container.hidden=false;
    }
    
    function obtenerId():number
    {
        return listaVehiculos.length+1;
    }

    export function agregar()
    {
        var marca:string= (<HTMLInputElement>document.getElementById("txtMarca")).value;
        var modelo:string=(<HTMLInputElement>document.getElementById("txtModelo")).value;
        var precio=(<HTMLInputElement>document.getElementById("txtPrecio")).value;
        var tipo= (<HTMLInputElement>document.getElementById("txtTipo")).value;
                //logica, si es auto o camioneta
        if(tipo == "Auto" )// tipo == Auto)
        {
            var cantidadPuertas:number;
            var nuevoAuto:Auto = new Auto(obtenerId(), marca, modelo, parseInt(precio), cantidadPuertas);
            listaVehiculos.push(nuevoAuto);
        }
        else 
        {
            var cuatroXcuatro:boolean = (<HTMLInputElement>document.getElementById("cuatroXcuatro")).checked;
            var nuevaCamio:Camioneta = new Camioneta(obtenerId(), marca, modelo, parseInt(precio), cuatroXcuatro);
            listaVehiculos.push(nuevaCamio);
        }                
    }

    export function cargarGrilla(tabla: HTMLTableElement, id: number, marca: string,
                                modelo: string, precio: number, cantPuert: number, 
                                esCuatroXcuatro: string): void 
    {
        //cuando cargo la grilla, agrego un button
        var tr= document.createElement("tr");
        
        var tdId= document.createElement("td");
        var txt=document.createTextNode(id.toString()); //nuevoAuto.GetId()
        tdId.appendChild(txt);
        tr.appendChild(tdId);
        //tdId.hidden=true;
       
        var tdNa= document.createElement("td");
        var txt=document.createTextNode(marca);
        tdNa.appendChild(txt);
        tr.appendChild(tdNa);

        var tdAp= document.createElement("td");
        var txt=document.createTextNode(modelo);
        tdAp.appendChild(txt);
        tr.appendChild(tdAp);

        var tdPre= document.createElement("td");
        var txt=document.createTextNode(precio.toString());
        tdAp.appendChild(txt);
        tr.appendChild(tdPre);

        var tdPue= document.createElement("td");
        var txt=document.createTextNode(cantPuert.toString());
        tdAp.appendChild(txt);
        tr.appendChild(tdPue);

        var tdCua= document.createElement("td");
        var txt=document.createTextNode(esCuatroXcuatro.toString());
        tdAp.appendChild(txt);
        tr.appendChild(tdCua);

        var tdElim = document.createElement("td");
        var btnEliminar = document.createElement("button"); 
        btnEliminar.textContent="Eliminar";
        btnEliminar.addEventListener('click', eliminar); //AB.eliminar ver esto       
        tdElim.appendChild(btnEliminar);              
        tr.appendChild(tdElim);

        tabla.appendChild(tr);  
    }

    export function eliminar(tr: any)
    {
        var trAborrar = tr.target.parentNode.parentNode;
        var tdBorrado  = trAborrar.childNodes[0].innerHTML;
        var listaId = listaVehiculos.filter(Vehiculo => Vehiculo.getId()== tdBorrado);
        if(listaId.length>0)
        {
            listaVehiculos.splice(tdBorrado,1);
            tr.target.parentNode.parentNode.remove();
        }
    }
}