var boton = document.getElementById("cajaboton");
var body = document.querySelector("body");
var header= document.querySelector("header");
var h1= document.querySelector("h1");
var h2= document.querySelector("h2");
var form=document.querySelector("form");
var footer = document.querySelector("footer");
var main = document.querySelector("main");
var navlinks = document.querySelector("#pag");
var sol = document.querySelector(".botoninterno");
var luna = document.querySelector(".botoninterno");
boton.onclick = function(){
    boton.classList.toggle('active');
    body.classList.toggle('active');
    footer.classList.toggle('active');
    main.classList.toggle('active');
    navlinks.classList.toggle('active');
    sol.classList.toggle('active');
    luna.classList.toggle('active');
    header.classList.toggle('active');
    h1.classList.toggle('active');
    h2.classList.toggle('active');
    form.classList.toggle('active');
}
