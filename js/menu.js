var menu = document.querySelector(".bar-menu");
var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var nav = document.querySelector(".nav")

menu.addEventListener("click", animateBar);

function animateBar(){
    line1.classList.toggle("line1-active");
    line2.classList.toggle("line2-active");
    line3.classList.toggle("line3-active");
    nav.classList.toggle("nav-activo")
    // if(document.querySelector(".nav").contains("nav-activo")){
    //     localStorage.setItem("tema-oscuro", "true")
    // }
    if(document.getElementById("nav").classList.contains("nav-activo")){
        localStorage.setItem("menu-barra", "true");

    } else{
        localStorage.setItem("menu-barra", "false");
    }
}

if(localStorage.getItem("menu-barra") === "true"){
    nav.classList.add("nav-activo")
    line1.classList.add("line1-active");
    line2.classList.add("line2-active");
    line3.classList.add("line3-active");
}   else{
    nav.classList.remove("nav-activo")
    line1.classList.remove("line1-active");
    line2.classList.remove("line2-active");
    line3.classList.remove("line3-active");
}

