function filtrarSexo(sexo)
{
    if(sexo =="female")
    {
       return filter(item=>item.gender==="female");
    }
    if(sexo =="male")
    {
        return datos.filter(item=>item.gender==="male");
    }
    
}