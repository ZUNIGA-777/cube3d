const cube = document.querySelector(".cube-3d")
const botonPLay = document.getElementById("btn-play")

let reproduction = false 
botonPLay.addEventListener("click",()=>{
    if(!reproduction){
        botonPLay.textContent = "STOP"
        reproduction = true
        cube.classList.add("animation")
    } else {
        botonPLay.textContent = "PLAY"
        reproduction = false
        cube.classList.remove("animation")
    }
})
