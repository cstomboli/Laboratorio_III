window.onload=function()
{
    var nombre= document.getElementById("txtNombre");
    var apellido= document.getElementById("txtApellido");
    var guardar= document.getElementById("btnGuardar");  
    var mostrar= document.getElementById("btnMostrar"); 
    var container=this.document.getElementById("container");  
    container.hidden=true;   

    guardar.onclick=function(){
        if(nombre.value == "" && apellido.value == "")
        {
            alert("Debe ingresar nombre y apellido");
            document.getElementById("txtNombre").className="classError";
            document.getElementById("txtApellido").className="classError";

        }
        else if (apellido.value == "") 
        {
            alert("Debe ingresar Apellido");  
            document.getElementById("txtApellido").className="classError";
   
        } 
        else if( nombre.value == "")
        {
            alert("Debe ingresar nombre");
            document.getElementById("txtNombre").className="classError";
        }
        else {

            if(confirm("Seguro desea guardar??"))
            {
                container.hidden=true;
                var tabla = document.getElementById("tabla");
                tabla.innerHTML += "<tr>"+"<td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href=''> Borrar</td>"+"</tr>";
                
               /* //ahora tendria q andar
                tabla.innerHTML = tabla.innerHTML +
                "<tr>"+
                "<td>"+nombre.value+"</td>"+
                "<td>"+apellido.value+"</td>"+
                "<td><a href= '' > borrar</a></td>"+
                "</tr>";
                 */                    
            }
        }    
    }
    
    mostrar.onclick=function(){
        //alert("mues");
        container.hidden=false;        
    }
    var cerrar=this.document.getElementById("btnCerrar");
    cerrar.onclick=function(){
        container.hidden=true;
    }
}