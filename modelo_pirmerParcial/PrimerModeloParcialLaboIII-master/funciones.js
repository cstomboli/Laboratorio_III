var http = new XMLHttpRequest; 

            window.onload = function(){
            var mostrar= document.getElementById("btnMostrar"); 
            var container=this.document.getElementById("container");  
            container.hidden=true; 
            var inputUser = document.getElementById("user").value;
            var inputPassword = document.getElementById("password").value;              
                
            mostrar.onclick=function(){
                http.onreadystatechange = callback;
            http.open("GET", "http://localhost:3000/personas",true);
            http.send(); 
            container.hidden=false;        
            }
            var cerrar=this.document.getElementById("btnCerrar");
            cerrar.onclick=function(){
            container.hidden=true;
            } 
                
                var guardar = document.getElementById("btnGuardar");
                guardar.onclick=function(){ 
                    if(document.getElementById("femenino").checked == true)
                    {
                        var sexo = "Female";
                    }
                    else if (document.getElementById("masculino").checked == true) 
                    {
                        var sexo = "Male";
                    } 
                    http.onreadystatechange = function(){
                        if(http.readyState == 4 && http.status==200)
                        {
                            alert("alguna vez");
                            armarGrilla(JSON.parse(http.responseText));    
                        }
                        else{
                            console.log("post error");
                        }
                    }
                    http.open("POST", "http://localhost:3000/nueva",true);
                    //var json = {"id":"",nombre:+nombre,apellido:+apellido,fecha:+fecha,sexo:+sexo};
                    var data = {nombre:document.getElementById("user").value,apellido:document.getElementById("password").value,fecha:document.getElementById("fecha").value,sexo:+sexo};
                    alert(JSON.stringify(data));
                    //alert(objJson);
                    http.send(data); 
                    /*
                    var fila = "<tr><td>"+nombre+"</td>"+
                        "<td>"+apellido+"</td>"+
                        "<td>"+fecha+"</td>"+
                        "<td>"+sexo+"</td>"+"</tr>"
                        tabla.innerHTML=tabla.innerHTML+fila; */
                }

                var editar = document.getElementById("btnEditar");
                editar.onclick=function(){
                    var nombre = document.getElementById("user").value;
                    var apellido = document.getElementById("password").value;
                    var fecha = document.getElementById("fecha").value;
                   // var sexo = document.getElementById("sexo").value; er esto
                   if(document.getElementById("femenino").checked = true)
                    {
                        var sexo = "Female";
                    }
                    else if (document.getElementById("masculino").checked = true) 
                    {
                        var sexo = "Male";
                    } 

                    http.open("POST", "http://localhost:3000/editar",true);
                    http.send(); 

                    var fila = "<tr><td>"+nombre+"</td>"+
                        "<td>"+apellido+"</td>"+
                        "<td>"+fecha+"</td>"+
                        "<td>"+sexo+"</td>"+"</tr>"
                        tabla.innerHTML=tabla.innerHTML+fila; 
                }

                var eliminar = document.getElementById("btnEliminar");
                eliminar.onclick=function(){
                    var nombre = document.getElementById("user").value;
                    var apellido = document.getElementById("password").value;
                    var fecha = document.getElementById("fecha").value;
                    //var sexo = document.getElementById("sexo").value;
                    if(document.getElementById("femenino").checked = true)
                    {
                        var sexo = "Female";
                    }
                    else if (document.getElementById("masculino").checked = true) 
                    {
                        var sexo = "Male";
                    } 

                    http.open("POST", "http://localhost:3000/eliminar",true);
                    http.send(); 

                    var fila = "<tr><td>"+nombre+"</td>"+
                        "<td>"+apellido+"</td>"+
                        "<td>"+fecha+"</td>"+
                        "<td>"+sexo+"</td>"+"</tr>"
                        tabla.innerHTML=tabla.innerHTML+fila; 
                }
            }
            function callback(){
                if(http.readyState == 4 && http.status==200)
                {
                    armarGrilla(JSON.parse(http.responseText));    
                }
                else{
                    console.log("este error");
                }
            }    
            
             
            function armarGrilla(jsonObj){
            var tabla=document.getElementById("tabla");
            for (var i=0; i<jsonObj.length; i++) //no va a tomar el length
            {
                var fila = "<tr><td>"+jsonObj[i].nombre+"</td>"+
                "<td>"+jsonObj[i].apellido+"</td>"+
                "<td>"+jsonObj[i].fecha+"</td>"+
                "<td>"+jsonObj[i].sexo+"</td>"+"</tr>"
                tabla.innerHTML=tabla.innerHTML+fila; 
               // console.log(jsonObj[i].nombre);
            }
        }