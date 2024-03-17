let input = document.getElementById('buscar')
let contenedor0 = document.getElementById('204');
let contenedor1 = document.getElementById('205');
let contenedor2 = document.getElementById('206');
let boton = document.getElementById('boton');


boton.addEventListener('click',function(){
let resultadoInput = input.value.trim();

 if(resultadoInput === "204") {
   mostrar204()
 } else {
    contenedor0.style.display = "none"
 }
}) 

function mostrar204(){
    if(contenedor0.style.display === "none"){
      contenedor0.style.display = "block"
    } else {
        contenedor0.style.display = "none"
    }
}

boton.addEventListener('click',function(){
    let resultadoInput = input.value.trim();
    
     if(resultadoInput === "205") {
       mostrar205()
     } else {
        contenedor.style.display = "none"
     }
    }) 
    
  

    function mostrar205(){
        if(contenedor1.style.display === "none"){
          contenedor1.style.display = "block"
        } else {
            contenedor1.style.display = "none"
        }
    }

    function mostrar206(){
        if(contenedor2.style.display === "none"){
          contenedor2.style.display = "block"
        } else {
            contenedor2.style.display = "none"
        }
    }

    boton.addEventListener('click',function(){
        let resultadoInput = input.value.trim();
        
         if(resultadoInput === "206") {
           mostrar206()
         } else {
            contenedor2.style.display = "none"
         }
        }) 
        


// function buscar1(){
//     let resultadoInput = input.value.trim();
//     if(resultadoInput === "204"){
//         contenedor.style.display = "block"
//     } else {
//         contenedor.style.display = "none"
//     }
// }