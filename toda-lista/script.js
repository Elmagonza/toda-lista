const fecha = document.getElementById("fecha")
const lista = document.getElementById("lista")
const input = document.getElementById("input")
const botonEnter = document.getElementById("enter")
const check = "fa-check-circle"
const uncheck ="fa-circle"
const lineThrough ="line-through"
let id = 0

//FUNCION AGREGAR TAREA



function agregarTarea (tarea,id,realizado,eliminado){

    if(eliminado){return}
    
    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ""

    const elemento =
        `<li class="elemento">
            <i id="${id}" class="far ${REALIZADO}" data="realizado"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i id="${id}" class="fas fa-trash de" data="eliminado"></i>
        </li>
        `
    lista.insertAdjacentHTML("beforeend", elemento)
}

function tareaRealizada(element){
    element.classList.toogle(check)
    element.classList.toogle(uncheck)
}





botonEnter.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea){
       agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase(),id,false,false)
    }
    input.value=""
    id++
})

document.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
        agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase(),id,false,false)
    }
    input.value=""
    }  
    id++
})

lista.addEventListener('click',function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    if (elementData==='realizado'){
        tareaRealizada(element)
    }
    else if (elementData==='eliminado'){
        tareaEliminada(element)
    }
})