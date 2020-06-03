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
    contenedor.hidden=true; 
    var btnCerar = document.getElementById("btnCerrar");
    btnCerar.onclick=function()
    {
        contenedor.hidden=true;
    }

    peticion('GET', "http://localhost:3000/personas", callback);
    //loading.hidden=false; //mmmm

    var btnModificar = document.getElementById("btnModificar");
    btnModificar.onclick= function()
    {
        if(chequearDatos())
        {
            peticion('POST', "http://localhost:3000/editar", callbackEditar)
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
        peticion('POST', "http://localhost:3000/eliminar", callbackEliminar);
        eliminar;
    }  
    
    var btnAgregar =document.getElementById("btnAgregar");
    btnAgregar.onclick= function()
    {
        if(chequearDatos())
        {
            peticion('POST', "http://localhost:3000/nueva", callbackNueva);
        }
        else
        {
            alert("No se pudo agregar.");
        }
    }
}

function peticion(metodo, url, funcion)
{
    if((http.onreadystatechange = funcion))
    {
        http.open(metodo, url);
        if(metodo == 'GET')
        {
            http.send();   
            loading.hidden=false;     
        }   
        else if(metodo == 'POST')
        {
            var data;
            http.setRequestHeader("Content-Type","application/json");

            if( url == "http://localhost:3000/editar")
            {
                
                    if((document.getElementById("checkFe").checked)==true)
                    {
                        data={id:idObtenido, nombre:document.getElementById("nombre").value, 
                        apellido: document.getElementById("apellido").value, fecha: document.getElementById("fecha").value, 
                        sexo: document.getElementById("checkFe").value}
                    }
                    else if((document.getElementById("checkMa").checked)==true)
                    {
                        data={id:idObtenido, nombre:document.getElementById("nombre").value, 
                        apellido: document.getElementById("apellido").value, fecha: document.getElementById("fecha").value, 
                        sexo: document.getElementById("checkMa").value}
                    }                    
               
                
            }
            else if(url == "http://localhost:3000/eliminar")
            {
                data = {id:idObtenido};
            }
            else if(url == "http://localhost:3000/nueva")
            {
                
                    if((document.getElementById("checkFe").checked)==true)
                    {
                        data={nombre:document.getElementById("nombre").value, 
                        apellido: document.getElementById("apellido").value, fecha: document.getElementById("fecha").value, 
                        sexo: document.getElementById("checkFe").value}
                    }
                    else if((document.getElementById("checkMa").checked)==true)
                    {
                        data={nombre:document.getElementById("nombre").value, 
                        apellido: document.getElementById("apellido").value, fecha: document.getElementById("fecha").value, 
                        sexo: document.getElementById("checkMa").value}
                    } 
                
            }
            http.send(JSON.stringify(data)); 
            loading.hidden=false;
        }
    } 
}

function callback()
{
    if(http.readyState == 4 && http.status == 200)
    {
        cargarGrilla(JSON.parse(http.responseText));
        loading.hidden=true; //supuestamente esta bien aca
    }    
}

function callbackEditar()
{
    if(http.readyState == 4 && http.status == 200)
    {
        modificar();
        //var respuesta= http.responseText;
        //alert(respuesta); es todos los datos de la persona!! si algun dato esta mal pone null no tira 
                            // el type: error.
        contenedor.hidden=true;
        loading.hidden=true; 
    }    
}

function callbackEliminar()
{
    if(http.readyState == 4 && http.status == 200)
    {
        //if( http.responseText == '{"type":"ok"}') // asii anda
        if(JSON.parse(http.responseText).type == "ok") //asi queda mas lindo
        {
            eliminar(); 
            contenedor.hidden=true;
            loading.hidden=true; 
        }
        else
        {
            alert("No se ha podido eliminar!!");
        }        
    }    
}

function callbackNueva()
{
    if(http.readyState == 4 && http.status == 200)
    {
        agregar(JSON.parse(http.responseText));
        contenedor.hidden=true;
        loading.hidden=true; 
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
    var fecha = document.getElementById("fecha").value;
    var retorno =false;
    if(nombre.length>3) 
    {
        if(apellido.length>3)
        {            
            var fechaId = document.getElementById("fecha").value;
            fecha.max = fechaActual.getFullYear()+"-"+(fechaActual.getMonth()+1)+"-"+fechaActual.getDate();
            if(fecha.max < fechaId) //asi valida
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