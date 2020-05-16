window.onload=function()
{
    var enviar= document.getElementById("btnEnviar");
    var usuario= document.getElementById("txtUsuario"); 
    var contraseña =document.getElementById("txtPassword");
    enviar.onclick=function()
    {      
        alert("inco");
          
        if((usuario.value == 'Carolina' || usuario.value == 'carolina')  && (contraseña.value==123))
        {
            alert("Bienvenido " + usuario.value);                         
        }
        else
        {
            alert("Usuario o contraserña invalido");       
        } 
                     
    }
    var limpiar= document.getElementById("btnLimpiar");
    limpiar.onclick=function()
    {
        contraseña.value="";
        usuario.value="";
    }
}