const input = document.getElementById("amigo");
const nombres = [];
const lu = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const sorteo = document.createElement("li");

function agregarAmigo(){
    const nombre = input.value.trim();

    if(nombre !== ""){
        nombres.push(nombre);

        const li=document.createElement("li");
        li.textContent=nombre;
        lu.appendChild(li);
        input.value = "";
        input.focus()
    }

    else{
        alert("El nombre no puede estar vacío");
    }
}

function sortearAmigo(boton){

    sorteo.textContent = "tu amigo secreto es: " + nombres[Math.floor(Math.random()*nombres.length)];
    resultado.appendChild(sorteo);
    lu.remove();
    boton.disabled = true;
}