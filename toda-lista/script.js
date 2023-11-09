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

// Convertir la primera letra a mayúscula y el resto a minúscula
//tarea = 

botonEnter.addEventListener('click',()=>{
    const tarea = input.value
    if(tarea){
       agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase())
    }
    input.value=""
})

document.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        const tarea = input.value
        if(tarea){
        agregarTarea(tarea.charAt(0).toUpperCase() + tarea.slice(1).toLowerCase())
    }
    input.value=""
    }  
})
