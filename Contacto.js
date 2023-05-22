let inputNombre =document.getElementById("nombreForm")


let inputApellido =document.getElementById("apellidoForm")
let inputMsj =document.getElementById("msjForm")
let telefonoForm =document.getElementById("fonoForm")
let formSubmit =document.getElementById("formContactos")

function guardarFormulario(){
    localStorage.setItem("Nombres", inputNombre.value)
    localStorage.setItem("Apellido", inputApellido.value)
    localStorage.setItem("Mensaje", inputMsj.value)
    localStorage.setItem("Telefono", telefonoForm.value)
}

formSubmit.addEventListener("submit", guardarFormulario)


function recuperarNombre(){
    inputNombre.value =localStorage.getItem("Nombres")
}

for (let i=0; i<localStorage.length; i++){
    let clave=localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: " + localStorage.getItem(clave));
}
