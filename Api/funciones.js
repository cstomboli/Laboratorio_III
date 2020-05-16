//cuando abro npm install y node index.js
/*
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
       /* else if((nombre.value == "Carolina" || nombre.value == 'carolina')  && (apellido.value==123))
        {
            alert("Usuario o contraseña invalida");
            document.getElementById("txtNombre").className="classError";            
        }///cerraba aca
        else{
            //aca podria poner el if de si es tal el usuario y contraseña
            if((nombre.value == "Carolina" || nombre.value == "carolina")  && (apellido.value==123))
            {    
                container.hidden=true;
                var tabla = document.getElementById("tabla");
                tabla.innerHTML += "<tr>"+"<td>"+nombre.value+"</td><td>"+apellido.value+"</td><td><a href=''> Borrar</td>"+"</tr>";   
               
            }
            else
            {
                alert("usuario o contraseña incorrecta");
            }          
               /* //ahora tendria q andar
                tabla.innerHTML = tabla.innerHTML +
                "<tr>"+
                "<td>"+nombre.value+"</td>"+
                "<td>"+apellido.value+"</td>"+
                "<td><a href= '' > borrar</a></td>"+
                "</tr>";
                 //// aca tmb                    
            //}
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
}       */

var http = new XMLHttpRequest; 

              window.onload = function(){
                var mostrar= document.getElementById("btnMostrar"); 
                var container=this.document.getElementById("container");  
                container.hidden=true; 
                var btn = document.getElementById("btnEnviar");
                btn.onclick = function(){
                    var inputUser = document.getElementById("user").value;
                    var inputPassword = document.getElementById("password").value;

                    http.onreadystatechange = callback;
                    http.open("GET", "http://localhost:3000/loginUsuario?usr="+inputUser+"&pass="+inputPassword,true);
                    /*  Si fuera post
                    http.open("POST", "http://localhost:3000/loginUsuario",true);
                    http.send("usr="+inputUser+"&pass="+inputPassword);
                    */
                    http.send();
                   
                    
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
            function callback(){
                if(http.readyState == 4 && http.status==200){
                    console.log(http.response);
                    if(http.response=="true")
                    {
                        console.log("mi funcion");
                        agregar;
                    }
                }
            } 
            function agregar(){
                console.log("agregar");
                container.hidden=true;
                var tabla = document.getElementById("tabla");
                tabla.innerHTML += "<tr>"+"<td>"+inputUser+"</td><td>"+inputPassword+"</td><td><a href=''> Borrar</td>"+"</tr>";   
           
            }
            


