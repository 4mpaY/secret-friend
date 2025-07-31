const input = document.getElementById("amigo");
const nombres = [];
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const sorteo = document.createElement("li");

let numero = 0;

function agregarAmigo(){
    const nombre = input.value.trim();
    if(numero==1){
        return;
    }
    else if(nombre !== ""){
        nombres.push(nombre);

        const li=document.createElement("li");
        li.textContent=nombre;
        listaAmigos.appendChild(li);
        input.value = "";
        input.focus()
    }

    else{
        alert("El nombre no puede estar vacío");
    }
}

function sortearAmigo(boton){


    if(nombres.length === 0 ||nombres.length === 1){
        alert("Primero debes agregar al menos 2 nombres")
        return;
    }
    sorteo.textContent = "tu amigo secreto es: " + nombres[Math.floor(Math.random()*nombres.length)];
    resultado.appendChild(sorteo);
    listaAmigos.remove();
    boton.disabled = true;
    input.disabled = true;
    numero++;
}