const fecha = document.getElementById("fecha")
const lista = document.getElementById("lista")
const input = document.getElementById("input")
const botonEnter = document.getElementById("enter")

//FUNCION AGREGAR TAREA

function agregarTarea (tarea){
    const elemento =
        `<li class="elemento">
            <i id="0" class="far fa-circle co" data="realizado"></i>
            <p class="text ">${tarea}</p>
            <i id="0"class="fas fa-trash de" data="eliminado"></i>
        </li>
        `
    lista.insertAdjacentHTML("beforeend", elemento)
}

botonEnter.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea)
    }
    input.value=""
})
