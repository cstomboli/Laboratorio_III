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
                    if(http.response=="true")
                    {
                        container.hidden=true;
                        var tabla = document.getElementById("tabla");
                        var inputUser = document.getElementById("user").value;
                        var inputPassword = document.getElementById("password").value;
                        tabla.innerHTML += "<tr>"+"<td>"+inputUser+"</td><td>"+inputPassword+"</td><td><a href=''> Borrar</td>"+"</tr>";   
                    }
                }
            } 