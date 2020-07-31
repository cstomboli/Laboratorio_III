//import { json } from "body-parser";

var http = new XMLHttpRequest();
var loading;
var contenedor;
var padre;
var idObtenido;
var fechaActual = new Date();


window.onload = function()
{
    contenedor=document.getElementById("form"); 
    loading= document.getElementById("loading"); 
    contenedor.hidden=false; 

    var btnCerar = document.getElementById("btnCerrar");
    btnCerar.onclick=function()
    {
        contenedor.hidden=true;
    }

    

    var btnModificar = document.getElementById("btnModificar");
    btnModificar.onclick= function()
    {
        if(chequearDatos())
        {
            modificar;
        }
        else
        {
            alert("No se pudieron modificar los datos!");
        }
        
    }

    var btnEliminar = document.getElementById("btnEliminar");
    btnEliminar.onclick= function()
    {
        eliminar;
    }  
    
    var btnAgregar =document.getElementById("btnAgregar");
    btnAgregar.onclick= function()
    {
        if(chequearDatos())
        {
        }
        else
        {
            alert("No se pudo agregar.");
        }
    }
}

function agregar(persona)
{
    var tabla = document.getElementById("table");
    
        var tr= document.createElement("tr");
        
        var tdId= document.createElement("td");
        var txt=document.createTextNode(persona.id);
        tdId.appendChild(txt);
        tr.appendChild(tdId);
        tdId.hidden=true;
       
        var tdNa= document.createElement("td");
        var txt=document.createTextNode(persona.nombre);
        tdNa.appendChild(txt);
        tr.appendChild(tdNa);

        var tdAp= document.createElement("td");
        var txt=document.createTextNode(persona.apellido);
        tdAp.appendChild(txt);
        tr.appendChild(tdAp);

        var tdFe= document.createElement("td");
        var txt=document.createTextNode(persona.fecha);
        tdFe.appendChild(txt);
        tr.appendChild(tdFe);

        var tdSe= document.createElement("td");
        var txt=document.createTextNode(persona.sexo);
        tdSe.appendChild(txt);
        tr.appendChild(tdSe);

        tabla.appendChild(tr);   

}

function eliminar()
{
    padre.remove();
}

function modificar()
{
    hijo = padre.childNodes;
    // ver los requisitos  que tienen que tener los datos.
    if(chequearDatos())
    {
        hijo[0].textContent= idObtenido;
        hijo[1].textContent = document.getElementById("nombre").value;
        hijo[2].textContent = document.getElementById("apellido").value;
        hijo[3].textContent = document.getElementById("fecha").value;
        
        if(document.getElementById("checkFe").checked == true)
        {
            hijo[4].textContent = "Female";
        }
        else if (document.getElementById("checkMa").checked == true)
        {
            
            hijo[4].textContent = "Male";
        }
    }
    else
    {
        alert("Error en la carga de datos.");
    }
    
}
function chequearDatos()
{
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha");
    var retorno =false;
    if(nombre.length>3) 
    {
        if(apellido.length>3)
        {  
            //retorno=true;      
                
            var fechaId = document.getElementById("fecha").value;
            fecha.max = fechaActual.getFullYear()+"-"+(fechaActual.getMonth()+1)+"-"+fechaActual.getDate();
            console.log("fecha maz"+fecha.max);
            console.log("fecha inreg"+fechaId);

            if(fecha.max > fechaId) //asi valida
            {
                retorno=true;
            }
            else
            {
                alert("La fecha debe ser menor a la actual");
                document.getElementById("fecha").className ="classError";

            } 
        }
        else
        {
            alert("El apellido debe tener mas de 3 letras"); 
            document.getElementById("apellido").className ="classError";
        }
    }
    else
    {
        alert("El nombre debe tener mas de 3 letras"); 
        document.getElementById("nombre").className ="classError";
        if(apellido.length<3)
        {
            alert("El apellido debe tener mas de 3 letras"); 
            document.getElementById("apellido").className ="classError";
        }
    }
    return retorno;
}

function cargarGrilla(personas)
{
    var tabla = document.getElementById("table");
    for(var i=0; i<personas.length; i++)
    {
        var tr= document.createElement("tr");
        
        var tdId= document.createElement("td");
        var txt=document.createTextNode(personas[i].id);
        tdId.appendChild(txt);
        tr.appendChild(tdId);
        tdId.hidden=true;
       
        var tdNa= document.createElement("td");
        var txt=document.createTextNode(personas[i].nombre);
        tdNa.appendChild(txt);
        tr.appendChild(tdNa);

        var tdAp= document.createElement("td");
        var txt=document.createTextNode(personas[i].apellido);
        tdAp.appendChild(txt);
        tr.appendChild(tdAp);

        var tdFe= document.createElement("td");
        var txt=document.createTextNode(personas[i].fecha);
        tdFe.appendChild(txt);
        tr.appendChild(tdFe);

        var tdSe= document.createElement("td");
        var txt=document.createTextNode(personas[i].sexo);
        tdSe.appendChild(txt);
        tr.appendChild(tdSe);

        tr.addEventListener("dblclick", cliclkGrilla);

        tabla.appendChild(tr);
    }
}

function cliclkGrilla(clickeo)
{
    contenedor.hidden=false;
    padre= clickeo.target.parentNode;
    hijo= padre.childNodes;

    idObtenido= hijo[0].textContent;
    document.getElementById("nombre").value = hijo[1].textContent;
    document.getElementById("apellido").value = hijo[2].textContent;
    document.getElementById("fecha").value = hijo[3].textContent;
    if( hijo[4].textContent == "Female")
    {
        document.getElementById("checkFe").checked = true;
    }
    else if (hijo[4].textContent == "Male")
    {
        document.getElementById("checkMa").checked = true;
    }
}