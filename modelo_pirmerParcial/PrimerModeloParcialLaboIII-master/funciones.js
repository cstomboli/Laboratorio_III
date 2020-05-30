var http = new XMLHttpRequest; 
var idObtenido;
var padre;
var fechaActual = new Date();
window.onload = function()
{
    //var mostrar= document.getElementById("btnMostrar"); 
    var container=document.getElementById("container");  
    var loading= document.getElementById("loading");
    container.hidden=true; 
    loading.hidden=true;              
            
    http.onreadystatechange = callback;
    http.open("GET", "http://localhost:3000/personas",true);
    http.send(); 
    /*
    mostrar.onclick=function()
    {            
        container.hidden=false;
        
            loading.hidden=true;
               
    }*/

    var cerrar=this.document.getElementById("btnCerrar");
    cerrar.onclick=function()
    {
        container.hidden=true;
    } 
                
    var guardar = document.getElementById("btnGuardar");
    guardar.onclick=function()
    { 
        if(document.getElementById("femenino").checked == true)
        {
            var data = {nombre:document.getElementById("user").value,apellido:document.getElementById("password").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("femenino").value};
            var fila = "<tr><td>"+document.getElementById("user").value+"</td>"+
            "<td>"+document.getElementById("password").value+"</td>"+
            "<td>"+document.getElementById("fecha").value+"</td>"+
            "<td>"+document.getElementById("femenino").value+"</td>"+"</tr>"
            tabla.innerHTML=tabla.innerHTML+fila; 
        }
        else if (document.getElementById("masculino").checked == true) 
        {
            var data = {nombre:document.getElementById("user").value,apellido:document.getElementById("password").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("masculino").value};
            var fila = "<tr><td>"+document.getElementById("user").value+"</td>"+
            "<td>"+document.getElementById("password").value+"</td>"+
            "<td>"+document.getElementById("fecha").value+"</td>"+
            "<td>"+document.getElementById("masculino").value+"</td>"+"</tr>"
            tabla.innerHTML=tabla.innerHTML+fila; 
        } 
        http.onreadystatechange = function()
        {
            if(http.readyState == 4 && http.status==200)
            {
                armarGrilla(JSON.parse(http.responseText)); 
                //setTimeout((loading.hidden=true),3000); 
            }
            else
            {
                console.log("post error");
            }
        }
        http.open("POST", "http://localhost:3000/nueva",true);
        http.setRequestHeader("Content-Type","application/json");
        http.send(JSON.stringify(data)); 
    }

        var editar = document.getElementById("btnEditar");
        editar.onclick=function()
        {
            peticionPost("POST","http://localhost:3000/editar",true);
            hijo= padre.childNodes;
            console.log(hijo[1].textContent);
            hijo[0].textContent=idObtenido;
            if(chequearDatosConAviso(document.getElementById("user").value, document.getElementById("password").value))
            {
                hijo[1].textContent=document.getElementById("user").value;
                //document.getElementById("user").value= hijo[0].innerHTML; se puede escribir de las dos formas
                hijo[2].textContent=document.getElementById("password").value;
            }            
            hijo [3].textContent=document.getElementById("fecha").value;
            if(document.getElementById("femenino").checked = true)
            {                
                hijo[4].textContent=='Female'   
            }
            else if (document.getElementById("masculino").checked = true) 
            {                
                hijo[3].textContent=='Male'
            }           
        }

        var eliminar = document.getElementById("btnEliminar");
        eliminar.onclick=function()
        {
            peticionPostId("POST", "http://localhost:3000/eliminar", true, idObtenido)
            console.log(idObtenido);
            padre.remove();
            //padre.removeChild(hijo[1]); //esto lo elimina, va borra ese contenido                
        }
}
        function peticionPostId(metodo, url, funcion, id)
        {
            http.onreadystatechange =funcion;
            http.open(metodo, url, true);
            //http.setRequestHeader("Content-Type","application/json");                
            http.send(id);
            container.hidden=true;

        }
            
            function callback()
            {
                if(http.readyState == 4 && http.status==200)
                {
                    armarGrilla(JSON.parse(http.responseText)); 
                    //setTimeout((loading.hidden=true),8000);   
                }
                else{
                    console.log("este error");
                }
            }    
            
            function armarGrilla(jsonObj)
            {
                var tabla=document.getElementById("tabla");
                for (var i=0; i<jsonObj.length; i++) 
                {
                    var tr = document.createElement("tr"); //Creo la fila
                    //tr.setAttribute("idPersona",i+1); //invento el id
                    var tdId = document.createElement("td"); 
                    var text = document.createTextNode(jsonObj[i].id); //pero tmb lo tengo aca el id
                    tdId.appendChild(text) 
                    tr.appendChild(tdId);
                    tdId.hidden=true;
                    /*Esto se va a repetir por cada celda que quiera mostrar --- inicio*/
                    var td = document.createElement("td"); //creo la celda
                    var text = document.createTextNode(jsonObj[i].nombre); //creo el texto adentro de la celda
                    td.appendChild(text) // Agrego el texto adentro de la celda
                    tr.appendChild(td);//agrego la celda adentro de la fila
                    /*Esto se va a repetir por cada celda que quiera mostrar --- fin*/  
                    var tdApe = document.createElement("td"); 
                    var text = document.createTextNode(jsonObj[i].apellido); 
                    tdApe.appendChild(text) 
                    tr.appendChild(tdApe); 

                    var tdFec = document.createElement("td"); 
                    var text = document.createTextNode(jsonObj[i].fecha); 
                    tdFec.appendChild(text) 
                    tr.appendChild(tdFec);

                    var tdSxc = document.createElement("td"); 
                    var text = document.createTextNode(jsonObj[i].sexo); 
                    tdSxc.appendChild(text) 
                    tr.appendChild(tdSxc);
                    
                    tr.addEventListener("dblclick",clickGrilla);

                    tabla.appendChild(tr);//Agrego la fila a la tabla
                }
            }

        function peticionPost(metodo,url,funcion)
        {
            http.onreadystatechange =funcion;
            http.open(metodo, url, true);
            http.setRequestHeader("Content-Type","application/json");
            if ((document.getElementById("femenino").checked==true) && (chequearDatos(document.getElementById("user").value, document.getElementById("password").value, document.getElementById("fecha").value)))
            {
                var data = {id:idObtenido,nombre:document.getElementById("user").value,apellido:document.getElementById("password").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("femenino").value};
            }
            else if ((document.getElementById("masculino").checked==true)&& (chequearDatos(document.getElementById("user").value, document.getElementById("password").value)))
            {
                var data = {id:idObtenido,nombre:document.getElementById("user").value,apellido:document.getElementById("password").value,fecha:document.getElementById("fecha").value,sexo:document.getElementById("masculino").value};
            }
            else if((document.getElementById("femenino").checked==false)&&(document.getElementById("masculino").checked==false))
            {
                data= null;
            }
            http.send(JSON.stringify(data));
            container.hidden=true;

        }

        function peticionSet(metodo,url,funcion)
        {
            http.onreadystatechange =funcion;
            http.open(metodo, url, true);            
            http.send();
            container.hidden=true;

        }

        function clickGrilla(e)
        {
            container.hidden=false;
            padre= e.target.parentNode;
            hijo= padre.childNodes;
            //console.log(padre);
            idObtenido=hijo[0].textContent;
            document.getElementById("user").value= hijo[1].textContent;
            //document.getElementById("user").value= hijo[0].innerHTML; se puede escribir de las dos formas
            document.getElementById("password").value=hijo[2].textContent;
            document.getElementById("fecha").value =hijo [3].textContent;
            if(hijo[4].textContent=='Female')
            {
                document.getElementById("femenino").checked = true   
            }
            else if (hijo[3].textContent=='Male') 
            {
                document.getElementById("masculino").checked = true
            } 
        }

        function chequearDatos(nombre, apellido, fecha)
        {
            var retorno = true;
            //var fechaActual= new Date();
            //var fechaIngresada = Date(fecha);
 
            if((nombre.value == "" || nombre.length<=3) || (apellido.value == "" || apellido.length<=3) )
            {
                if(nombre.value == "" || nombre.length<=3)
                {
                    document.getElementById("user").className="classError";
                }                
                else if(apellido.value == "" || apellido.length<=3)
                {
                    document.getElementById("password").className="classError";
                }
                /*
                else if(fechaIngresada.getTime()>fechaActual.getTime())
                {
                    alert("la fecha debe ser anterior a la actual");
                }    */
                retorno = false;            
            }          
            return retorno;
        }

        function chequearDatosConAviso(nombre, apellido)
        {
            var retorno = true;

            if((nombre.value == "" || nombre.length<=3) || (apellido.value == "" || apellido.length<=3))
            {
                if(nombre.value == "" || nombre.length<=3)
                {
                    document.getElementById("user").className="classError";
                    alert("Debe ingresar nombre con mas de 3 letras");
                }                
                else if(apellido.value == "" || apellido.length<=3)
                {
                    document.getElementById("password").className="classError";
                    alert("Debe ingresar apellido con mas de 3 letras");
                }    
                retorno = false;            
            } 
            return retorno;
        }

