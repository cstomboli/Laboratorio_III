var http = new XMLHttpRequest();
var loading;
var contenedor;
var trPadre;
var idObtenido;
var fechaActual = new Date();


window.onload = function()
{
    loading = document.getElementById("loading");
    contenedor = document.getElementById("form");
    contenedor.hidden=true;
    //loading.hidden=true;

    peticion('GET', "http://localhost:3000/materias", callback);

    var btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.onclick = function()
    {
        contenedor.hidden = true;
    }

    var btnEliminar = document.getElementById("btnEliminar");
    btnEliminar.onclick = function()
    {
        peticion('POST', "http://localhost:3000/eliminar", callbackEliminar);
    }

    var btnModificar = document.getElementById("btnModificar");
    btnModificar.onclick = function()
    {
        if(chequearDatos())
        {
            peticion('POST', "http://localhost:3000/editar", callbackEditar);
        }
    }

}

function peticion(metodo, url, funcion)
{
    if(http.onreadystatechange = funcion)
    {
        http.open(metodo, url);
        loading.hidden = false;
        contenedor.hidden=true;

        if(metodo == 'GET')
        {
            http.send();
        }
        else if (metodo == 'POST')
        {            
            var data;
            http.setRequestHeader("Content-Type","application/json");
            if(url == "http://localhost:3000/eliminar")
            {
                data = {id:idObtenido};
            }
            else if(url == "http://localhost:3000/editar")
            {
                if(document.getElementById("turMa").value)
                {
                    data = {"id":idObtenido,"nombre":document.getElementById("nombre").value,
                    "cuatrimestre":document.getElementById("cuatrimestre").value,
                    "fechaFinal":document.getElementById("fecha").value,
                    "turno":document.getElementById("turMa").value};
            
                }
                else if ( document.getElementById("turNo").value)
                {
                    data = {"id":idObtenido,"nombre":document.getElementById("nombre").value,
                    "cuatrimestre":document.getElementById("cuatrimestre").value,
                    "fechaFinal":document.getElementById("fecha").value,
                    "turno":document.getElementById("turNo").value};

                }
            }

            http.send(JSON.stringify(data)); 
        }
    }
}

function callback()
{
    if(http.status == 200 && http.readyState ==4)
    {
        cargarGrilla (JSON.parse(http.responseText));
        loading.hidden = true;
    }
}
function callbackEliminar()
{
    if(http.status == 200 && http.readyState ==4)
    {
        if( (JSON.parse(http.responseText)).type == "ok" )
        {
            trPadre.remove();
        } 
        else
        {
            alert("No se ha podido eliminar.");
        } 
        loading.hidden = true;
    }
}

function callbackEditar()
{
    if(http.status == 200 && http.readyState ==4)
    {
        if( (JSON.parse(http.responseText)).type == "ok" )
        {
            modificar();
        } 
        else
        {
            alert("No se ha podido modificar.");
        } 
        loading.hidden = true;
    }

}

function cargarGrilla(materias)
{
    var tabla = document.getElementById("table");

    for(var i=0; i<materias.length; i++)
    {
        var tr = document.createElement("tr");

        var tdId= document.createElement("td");
        var text = document.createTextNode(materias[i].id);
        tdId.appendChild(text);
        tr.appendChild(tdId);
        tdId.hidden=true;

        var tdId= document.createElement("td");
        var text = document.createTextNode(materias[i].nombre);
        tdId.appendChild(text);
        tr.appendChild(tdId);

        var td= document.createElement("td");
        var text = document.createTextNode(materias[i].cuatrimestre);
        td.appendChild(text);
        tr.appendChild(td);

        var td= document.createElement("td");
        var text = document.createTextNode(materias[i].fechaFinal);
        td.appendChild(text);
        tr.appendChild(td);

        var td= document.createElement("td");
        var text = document.createTextNode(materias[i].turno);
        td.appendChild(text);
        tr.appendChild(td);

        tr.addEventListener("dblclick", clickGrilla);

        tabla.appendChild(tr);
    }
}

function modificar()
{
    var hijo = trPadre.childNodes;

    hijo[1].textContent = document.getElementById("nombre").value;
    hijo[2].textContent = document.getElementById("cuatrimestre").value;

    var fecha= (document.getElementById("fecha").value).split('-');
    var fechaCorrecta= fecha[2]+'/'+fecha[1]+'/'+fecha[0];
    hijo [3].textContent=  fechaCorrecta;
    
    //hijo[3].textContent = document.getElementById("fecha").value;

    if((document.getElementById("turMa").checked))
    {
        hijo[4].textContent = document.getElementById("turMa").value;
    }
    else if((hijo[4].textContent) == "Noche")
    {
        document.getElementById("turNo").checked =true;
    } 


}

function clickGrilla(click)
{
    contenedor.hidden = false;
    trPadre = click.target.parentNode;
    var hijo = trPadre.childNodes;

    idObtenido = hijo[0].textContent;
    document.getElementById("nombre").value = hijo[1].textContent;
    document.getElementById("cuatrimestre").value =hijo[2].textContent; 
    document.getElementById("cuatrimestre").disabled=true;

    var fecha= (hijo [3].textContent).split('/');
    var fechaCorrecta= fecha[2]+'-'+fecha[1]+'-'+fecha[0];
    document.getElementById("fecha").value = fechaCorrecta;

    if((hijo[4].textContent) == "Mañana")
    {
        document.getElementById("turMa").checked =true;

    }
    else if((hijo[4].textContent) == "Noche")
    {
        document.getElementById("turNo").checked =true;
    }    
}

function chequearDatos()
{
    var nombre= document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha");
    var retorno =false;
    if(nombre.length>6) 
    {
        //retorno=true;
        
            var fechaId = document.getElementById("fecha").value;
            console.log("fehca id"+fechaId);
           fecha.min = fechaActual.getFullYear()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getDate();
            //fecha.min = fechaActual.getDate()+"/"+(fechaActual.getMonth()+1)+"/"+fechaActual.getFullYear();
            console.log("Fecha min"+fecha.min);
            if(fecha.min < fechaPar) //no valida ninguna fecha
            {
                retorno=true;
            }
            else
            {
                alert("La fecha debe ser mayor a la actual");
                document.getElementById("fecha").className ="classError";

            }  */
    }
    else
    {
        alert("El nombre de la materia debe tener mas de 6 letras"); 
        document.getElementById("nombre").className ="classError";
    }
    return retorno;
}