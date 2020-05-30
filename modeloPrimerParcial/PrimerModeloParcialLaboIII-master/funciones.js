var http = new XMLHttpRequest();

window.onload = function()
{
    var contenedor=document.getElementById("form");  
    var loading= document.getElementById("loading");
    contenedor.hidden=true; 
    loading.hidden=true; 
    var btnCerar = document.getElementById("btnCerrar");
    btnCerar.onclick=function()
    {
        contenedor.hidden=true;
    }

    


                
}

function peticion(metodo, url, funcion)
{
    http.onreadystatechange = funcion;
    http.open(metodo, url);

    if(metodo == 'GET')
    {
        alert("entro");
        http.send(); //capaz q el estar aca tira alguno errores
    }

}

function cargarGrilla(person)
{

}