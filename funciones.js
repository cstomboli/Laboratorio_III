
window.onload= inicializar;
function inicializar()
{
    var btn=document.getElementById("btn");
    btn.onclick=saludar;
    alert("Termino de cargar");
}
function saludar()
{
    alert("Hola");
}

/*
function sumar(a, b)
{
    alert(a+b);
}*/