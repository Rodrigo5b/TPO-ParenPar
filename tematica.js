var boton = document.getElementById("caja-boton")
var body = document.querySelector("body")
var titulo = document.querySelector(".main-titulo")
var footer = document.querySelector("footer")
var h3 = document.querySelector(".titulo-categoria")
var cabecera = document.querySelector(".cabecera")
var navlinks = document.querySelector(".links")


// titulo-categoria

boton.onclick = function(){
    boton.classList.toggle('activar')
    body.classList.toggle('activar')
    titulo.classList.toggle('titulo-oscuro')
    footer.classList.toggle('footer-oscuro')
    h3.classList.toggle('titulo-h3')
    cabecera.classList.toggle('cabecera-oscuro')
    navlinks.classList.toggle('nav-oscuros')

    

}