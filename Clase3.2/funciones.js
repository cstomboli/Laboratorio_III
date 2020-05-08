window.onload=function()
{
    alert("Entro");

    var nombre= document.getElementById("txtNombre").value;
    var apellido= document.getElementById("txtApellido").value;
    var guardar= document.getElementById("btnGuardar");    

    function agregar(){
        alert("Entro");
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

            //if(confirm("Seguro desea guardar??"))
            var seultado = confirm("¿Estas seguro q queres agregar?");
            if(seultado)
            {
                document.getElementById("txtNombre").className="sinError";
                document.getElementById("txtApellido").className="sinError";
                 var tabla = document.getElementById("tabla");
               //tabla.innerHTML += "<td>"+nombre+"</td><td>"+apellido+"</td><td><a href=''> Borrar</td>";
                
                //ahora tendria q andar
                tabla.innerHTML = tabla.innerHTML +
                "<tr>"+
                "<td>"+nombre.value+"</td>"+
                "<td>"+apellido.value+"</td>"+
                "<td><a href= '' > borrar</a></td>"+
                "</tr>";
                   
                 
            }
        }        

        
    }
}