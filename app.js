let i = Number;
const arrayX = [];
const arrayY = [];
const arrayBloques = [];
const bloques = document.getElementById('bloques');
let posV = 90;
let posH = 195;
let tileY = 1;
let tileX = 1;
let mejorar = document.getElementById("mejorar");
const girarPersonaje = document.querySelector('#personaje');
class Entidad{
    constructor(vida, puntos, x, y, imagen, ataque, id){
        this.vida = vida;
        this.puntos = puntos;
        this.x = x;
        this.y = y;
        this.imagen = imagen;
        this.ataque = ataque;
        this.id = id;
    }
}
//Puntos en el storage
    let puntos = Number;
    let puntosJSON = JSON.stringify(localStorage.getItem("puntos"));
    if (puntosJSON === "null"){
        Number(puntos = 0)
    }
    else {
        Number(puntos = JSON.parse(localStorage.getItem("puntos")))
    }
    const puntosDiv = document.querySelector('#puntos span');
    puntosDiv.innerText = puntos;
//Mejora en el storage
    let palaMejorada = false
    let mejoraJSON = localStorage.getItem("palaMejorada");
    if (mejoraJSON === "true"){
        mejorar.remove();
        palaMejorada = true
    }
    else{
        palaMejorada = false
    }
//Función para mover al personaje hacia arriba
    function u(){
        if(posV > 90){
            let hayBloque = false;
            let cualBloque = -1;
            for (i = 0; i < arrayBloques.length; i++){
                if ((arrayBloques[i].y == tileY - 1) & (arrayBloques[i].x == tileX)){
                    hayBloque = true;
                    cualBloque = i;
                }
            }
//Si hay bloque, ataca
            if ((hayBloque == true) & (cualBloque != -1)){
                if (palaMejorada == true){
                    arrayBloques[cualBloque].vida -= 3;
                }
                else{
                    arrayBloques[cualBloque].vida -= 1;
                }
                if (arrayBloques[cualBloque].vida <= 0){
                    let bloque = document.getElementById(`b${arrayBloques[cualBloque].id}`);
                    bloque.remove();
                    puntos = puntos + arrayBloques[cualBloque].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayBloques.splice(cualBloque, 1);
                    console.log(arrayBloques);
                }
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posV = posV - 60;
                personaje.style.top = posV + "px";
                tileY = tileY - 1;
                console.log(tileX)
                console.log(tileY)
            }
        }
    }
    function d(){
        if(posV < 440){
            let hayBloque = false;
            let cualBloque = -1;
            for (i = 0; i < arrayBloques.length; i++){
                if ((arrayBloques[i].y == tileY + 1) & (arrayBloques[i].x == tileX)){
                    hayBloque = true;
                    cualBloque = i;
                }
            }
//Si hay bloque, ataca
            if ((hayBloque == true) & (cualBloque != -1)){
                if (palaMejorada == true){
                    arrayBloques[cualBloque].vida -= 3;
                }
                else{
                    arrayBloques[cualBloque].vida -= 1;
                }
                if (arrayBloques[cualBloque].vida <= 0){
                    let bloque = document.getElementById(`b${arrayBloques[cualBloque].id}`);
                    bloque.remove();
                    puntos = puntos + arrayBloques[cualBloque].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayBloques.splice(cualBloque, 1);
                    console.log(arrayBloques);
                }
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posV = posV + 60;
                personaje.style.top = posV + "px";
                tileY = tileY + 1;
                console.log(tileX)
                console.log(tileY)
            }
        }
    }
    function l(){
        girarPersonaje.innerHTML = `
        <img src="img/shovel_knightL.png" alt="" class="img">`
        if(posH > 195){
            let hayBloque = false;
            let cualBloque = -1;
            for (i = 0; i < arrayBloques.length; i++){
                if ((arrayBloques[i].x == tileX - 1) & (arrayBloques[i].y == tileY)){
                    hayBloque = true;
                    cualBloque = i;
                }
            }
//Si hay bloque, ataca
            if ((hayBloque == true) & (cualBloque != -1)){
                if (palaMejorada == true){
                    arrayBloques[cualBloque].vida -= 3;
                }
                else{
                    arrayBloques[cualBloque].vida -= 1;
                }
                if (arrayBloques[cualBloque].vida <= 0){
                    let bloque = document.getElementById(`b${arrayBloques[cualBloque].id}`);
                    bloque.remove();
                    puntos = puntos + arrayBloques[cualBloque].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayBloques.splice(cualBloque, 1);
                    console.log(arrayBloques);
                }
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posH = posH - 60;
                personaje.style.left = posH + "px";
                tileX = tileX - 1;
                console.log(tileX)
                console.log(tileY)
            }
        }
    }
    function r(){
        girarPersonaje.innerHTML =`
        <img src="img/shovel_knightR.png" alt="" class="img">`
        if(posH < 550){
            let hayBloque = false;
            let cualBloque = -1;
            for (i = 0; i < arrayBloques.length; i++){
                if ((arrayBloques[i].x == tileX + 1) & (arrayBloques[i].y == tileY)){
                    hayBloque = true;
                    cualBloque = i;
                }
            }
//Si hay bloque, ataca
            if ((hayBloque == true) & (cualBloque != -1)){
                if (palaMejorada == true){
                    arrayBloques[cualBloque].vida -= 3;
                }
                else{
                    arrayBloques[cualBloque].vida -= 1;
                }
                if (arrayBloques[cualBloque].vida <= 0){
                    let bloque = document.getElementById(`b${arrayBloques[cualBloque].id}`);
                    bloque.remove();
                    puntos = puntos + arrayBloques[cualBloque].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayBloques.splice(cualBloque, 1);
                    console.log(arrayBloques);
                }
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posH = posH + 60;
                personaje.style.left = posH + "px";
                tileX = tileX + 1;
                console.log(tileX)
                console.log(tileY)
            }
        }
    }
//Creación de los bloques de forma aleatoria
    function randomInc(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    while (arrayX.length < 7){
        let random = randomInc(1,7);
        if(!arrayX.includes(random)){
            arrayX.push(random);
        }
    }
    while (arrayY.length < 7){
        let random = randomInc(6,7);
        arrayY.push(random);
    }
    for (i = 0; i < 7; i++){
        let random = randomInc(1,2);
        if(random == 1){
            arrayBloques.push(new Entidad(1, 50, arrayX[i], arrayY[i], "tierra.jpg", 0, i));
        }
        else if(random == 2){
            arrayBloques.push(new Entidad(3, 100, arrayX[i], arrayY[i], "piedra.jpg", 0, i));
        }
        let elementoBloque =`
        <img src="img/${arrayBloques[i].imagen}" class="img" id="b${arrayBloques[i].id}" style="left: ${(arrayBloques[i].x * 60) + 135}px; top: ${(arrayBloques[i].y * 60) + 35}px;">`;
        bloques.innerHTML += elementoBloque;
    }
    console.log(arrayBloques)
//Evento recargar storage
    let recargar = document.getElementById("recargar");
    function reiniciarStorage(){
        localStorage.clear();
    }
    recargar.addEventListener("click", reiniciarStorage);
//Evento para moverse hacia arriba
    let btnU = document.getElementById("btnU");
    btnU.addEventListener("click", u);
//Evento para moverse hacia abajo
    let btnD = document.getElementById("btnD");
    btnD.addEventListener("click", d);
//Evento para moverse hacia la izquierda
    let btnL = document.getElementById("btnL");
    btnL.addEventListener("click", l);
//Evento para moverse hacia la derecha
    let btnR = document.getElementById("btnR");
    btnR.addEventListener("click", r);
//Evento para mejorar la pala
    function mejorarPala(){
        if (puntos >= 600){
            mejorar.remove();
            palaMejorada = true;
            localStorage.setItem("palaMejorada", palaMejorada);
        }
    }
    mejorar.addEventListener("click", mejorarPala);