var boton = document.getElementById("caja-boton")
var cuerpo = document.querySelector(".cuerpo")
var form =document.querySelector(".formulario")
boton.onclick = function(){
    boton.classList.toggle('activar')
    cuerpo.classList.toggle("bg-alter")
    form.classList.toggle('formoscuro')
    if(document.getElementById("caja-boton").classList.contains("activar")){
        localStorage.setItem("boton-oscuro", "true");
    }   else{
        localStorage.setItem("boton-oscuro", "false");
    }
}
if(localStorage.getItem("boton-oscuro") === "true"){
    boton.classList.add('activar')
    cuerpo.classList.add("bg-alter")
    form.classList.add('formoscuro')
} else{
    boton.classList.remove('activar')
    cuerpo.classList.remove("bg-alter")
    form.classList.remove('formoscuro')

}
