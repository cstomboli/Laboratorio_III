var promesa = new Promise((resolve, reject)=>
{
    setTimeout(()=>{

        //Hacer algo por ejemplo exportar a un excel
        if(false) 
        {
            resolve("Se termino bien");
        }
        else
        {
            reject("Error!!");
        }  
    },3000);  
});

console.log("Empezo la promesa");
//al then y al catch le paso los callback
promesa.then(           //aca se ejecuta la promesa
    (response)=>
    {
        console.log(response);
    }
).catch((response)=>
{
    console.log(response);
});
console.log("Termino la promesa");
