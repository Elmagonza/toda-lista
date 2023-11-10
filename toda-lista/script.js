const fecha = document.getElementById("fecha")
const lista = document.getElementById("lista")
const input = document.getElementById("input")
const botonEnter = document.getElementById("enter")
const check = "fa-regular fa-circle-check"
const uncheck = "far fa-circle co"
const lineThrough ="line-through"
let id = 0

const LIST=[]

//FUNCION AGREGAR TAREA



function agregarTarea (tarea,id,realizado,eliminado){

    if(eliminado){return}
    
    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ""

    const elemento =
        `<li class="elemento">
            <i id="${id}" class=" ${REALIZADO}" data="realizado"></i>
            <p class="text ${LINE}">${tarea}</p>
            <i id="${id}" class="fas fa-trash de" data="eliminado"></i>
        </li>
        `
    lista.insertAdjacentHTML("beforeend", elemento)
}
//funcion tarea realizada

function tareaRealizada(element){
    check.split(' ').forEach(cls => element.classList.toggle(cls))
    uncheck.split(' ').forEach(cls => element.classList.toggle(cls))
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ? false:true
}

//funcion tarea eliminada

function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
}


botonEnter.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea){
       agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase(),id,false,false)
       LIST.push({
            nombre: tarea,
            id:id,
            realizado: false,
            eliminado:false
       })
    }
    input.value=""
    id++
})

document.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
        agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase(),id,false,false)
        LIST.push({
            nombre: tarea,
            id:id,
            realizado: false,
            eliminado:false
       })
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