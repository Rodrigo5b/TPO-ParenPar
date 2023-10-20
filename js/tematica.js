var boton = document.getElementById("caja-boton")
var body = document.querySelector("body")
var titulo = document.querySelector(".main-titulo")
var footer = document.querySelector("footer")
var categoria = document.querySelector(".main")
var cabecera = document.querySelector(".cabecera")
var navlinks = document.querySelector(".links")
var sol = document.querySelector(".sol")
var luna = document.querySelector(".luna")



// titulo-categoria

boton.onclick = function(){
    boton.classList.toggle('activar')
    body.classList.toggle('activar')
    titulo.classList.toggle('titulo-oscuro')
    footer.classList.toggle('footer-oscuro')
    categoria.classList.toggle('main-activar')
    cabecera.classList.toggle('cabecera-oscuro')
    navlinks.classList.toggle('nav-oscuros')
    sol.classList.toggle('aparecer')
    luna.classList.toggle('desaparecer')
}