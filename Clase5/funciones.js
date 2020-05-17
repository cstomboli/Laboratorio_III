var http = new XMLHttpRequest; 

              window.onload = function(){
                var mostrar= document.getElementById("btnMostrar"); 
                var container=this.document.getElementById("container");  
                container.hidden=true; 
                var inputUser = document.getElementById("user").value;
                var inputPassword = document.getElementById("password").value;

                http.onreadystatechange = callback;
                http.open("GET", "http://localhost:3000/personas",true);
                http.send();                 
                
                mostrar.onclick=function(){
                    container.hidden=false;        
                }
                var cerrar=this.document.getElementById("btnCerrar");
                cerrar.onclick=function(){
                    container.hidden=true;
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
                "<td>"+jsonObj[i].telefono+"</td>"+"</tr>"
                tabla.innerHTML=tabla.innerHTML+fila; 
               // console.log(jsonObj[i].nombre);
            }
        }

        function nuevaPersona(){

            
            var fila = "<tr><td>"+jsonObj[i].nombre+"</td>"+
                "<td>"+jsonObj[i].apellido+"</td>"+
                "<td>"+jsonObj[i].fecha+"</td>"+
                "<td>"+jsonObj[i].telefono+"</td>"+"</tr>"
                tabla.innerHTML=tabla.innerHTML+fila; 
        }