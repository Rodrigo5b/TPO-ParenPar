var boton = document.getElementById("caja-boton")
var cuerpo = document.querySelector(".cuerpo")

boton.onclick = function(){
    boton.classList.toggle('activar')
    cuerpo.classList.toggle("bg-alter")
}