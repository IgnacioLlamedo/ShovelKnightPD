let i = Number;
const arrayX = [];
const arrayY = [];
const arrayEntidad = [];
const bloques = document.getElementById('bloques');
let posV = 90;
let posH = 360;
let tileY = 1;
let tileX = 1;
let mejorar = document.getElementById("mejorar");
let hud = document.getElementById("hud");
const girarPersonaje = document.querySelector('#personaje');
let vidaPersonaje = 5;
class Entidad{
    constructor(vida, puntos, x, y, imagen, ataque, num){
        this.vida = vida;
        this.puntos = puntos;
        this.x = x;
        this.y = y;
        this.imagen = imagen;
        this.ataque = ataque;
        this.num = num;
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
//Vida en el storage
    let vidaJSON = localStorage.getItem("vidaPersonaje");
    if(vidaJSON != null){
        vidaPersonaje = vidaJSON;
    }
//Mejora en el storage
    let palaMejorada = false
    let mejoraJSON = localStorage.getItem("palaMejorada");
    if (mejoraJSON === "true"){
        mejorar.remove();
        palaMejorada = true
        hud.innerHTML =`
        <img src="img/hud2_${vidaPersonaje}.webp">`
    }
    else{
        palaMejorada = false
        hud.innerHTML =`
        <img src="img/hud1_${vidaPersonaje}.webp">`
    }
//Función para mover al personaje hacia arriba
    function u(){
        if(posV > 90){
            let hayEntidad = false;
            let cualEntidad = -1;
            for (i = 0; i < arrayEntidad.length; i++){
                if ((arrayEntidad[i].y == tileY - 1) & (arrayEntidad[i].x == tileX)){
                    hayEntidad = true;
                    cualEntidad = i;
                }
            }
//Si hay bloque, ataca
            if ((hayEntidad == true) & (cualEntidad != -1)){
                if (palaMejorada == true){
                    arrayEntidad[cualEntidad].vida -= 3;
                }
                else{
                    arrayEntidad[cualEntidad].vida -= 1;
                }
                if (arrayEntidad[cualEntidad].vida <= 0){
                    let bloque = document.getElementById(`b${arrayEntidad[cualEntidad].num}`);
                    bloque.remove();
                    puntos = puntos + arrayEntidad[cualEntidad].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayEntidad.splice(cualEntidad, 1);
                }
                else if (arrayEntidad[cualEntidad].vida > 0){
                    vidaPersonaje = vidaPersonaje - (arrayEntidad[cualEntidad].ataque);
                    if (vidaPersonaje > 5){
                        vidaPersonaje = 5;
                    }
                    if(palaMejorada == true){
                        hud.innerHTML =`
                        <img src="img/hud2_${vidaPersonaje}.webp">`
                    }
                    else if(palaMejorada == false){
                        hud.innerHTML =`
                        <img src="img/hud1_${vidaPersonaje}.webp">`
                    }
                    localStorage.setItem("vidaPersonaje", vidaPersonaje);
                }
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posV = posV - 60;
                personaje.style.top = posV + "px";
                tileY = tileY - 1;
            }
        }
    }
    function d(){
        if(posV < 440){
            let hayEntidad = false;
            let cualEntidad = -1;
            for (i = 0; i < arrayEntidad.length; i++){
                if ((arrayEntidad[i].y == tileY + 1) & (arrayEntidad[i].x == tileX)){
                    hayEntidad = true;
                    cualEntidad = i;
                }
            }
//Si hay bloque, ataca
            if ((hayEntidad == true) & (cualEntidad != -1)){
                if (palaMejorada == true){
                    arrayEntidad[cualEntidad].vida -= 3;
                }
                else{
                    arrayEntidad[cualEntidad].vida -= 1;
                }
                if (arrayEntidad[cualEntidad].vida <= 0){
                    let bloque = document.getElementById(`b${arrayEntidad[cualEntidad].num}`);
                    bloque.remove();
                    puntos = puntos + arrayEntidad[cualEntidad].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayEntidad.splice(cualEntidad, 1);
                }
                else if (arrayEntidad[cualEntidad].vida > 0){
                    vidaPersonaje = vidaPersonaje - (arrayEntidad[cualEntidad].ataque);
                    if (vidaPersonaje > 5){
                        vidaPersonaje = 5;
                    }
                    if(palaMejorada == true){
                        hud.innerHTML =`
                        <img src="img/hud2_${vidaPersonaje}.webp">`
                    }
                    else if(palaMejorada == false){
                        hud.innerHTML =`
                        <img src="img/hud1_${vidaPersonaje}.webp">`
                    }
                }
                localStorage.setItem("vidaPersonaje", vidaPersonaje);
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posV = posV + 60;
                personaje.style.top = posV + "px";
                tileY = tileY + 1;
            }
        }
    }
    function l(){
        girarPersonaje.innerHTML = `
        <img src="img/shovel_knightL.webp" alt="" class="img">`
        if(posH > 360){
            let hayEntidad = false;
            let cualEntidad = -1;
            for (i = 0; i < arrayEntidad.length; i++){
                if ((arrayEntidad[i].x == tileX - 1) & (arrayEntidad[i].y == tileY)){
                    hayEntidad = true;
                    cualEntidad = i;
                }
            }
//Si hay bloque, ataca
            if ((hayEntidad == true) & (cualEntidad != -1)){
                if (palaMejorada == true){
                    arrayEntidad[cualEntidad].vida -= 3;
                }
                else{
                    arrayEntidad[cualEntidad].vida -= 1;
                }
                if (arrayEntidad[cualEntidad].vida <= 0){
                    let bloque = document.getElementById(`b${arrayEntidad[cualEntidad].num}`);
                    bloque.remove();
                    puntos = puntos + arrayEntidad[cualEntidad].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayEntidad.splice(cualEntidad, 1);
                }
                else if (arrayEntidad[cualEntidad].vida > 0){
                    vidaPersonaje = vidaPersonaje - (arrayEntidad[cualEntidad].ataque);
                    if (vidaPersonaje > 5){
                        vidaPersonaje = 5;
                    }
                    if(palaMejorada == true){
                        hud.innerHTML =`
                        <img src="img/hud2_${vidaPersonaje}.webp">`
                    }
                    else if(palaMejorada == false){
                        hud.innerHTML =`
                        <img src="img/hud1_${vidaPersonaje}.webp">`
                    }
                }
                localStorage.setItem("vidaPersonaje", vidaPersonaje);
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posH = posH - 60;
                personaje.style.left = posH + "px";
                tileX = tileX - 1;
            }
        }
    }
    function r(){
        girarPersonaje.innerHTML =`
        <img src="img/shovel_knightR.webp" alt="" class="img">`
        if(posH < 715){
            let hayEntidad = false;
            let cualEntidad = -1;
            for (i = 0; i < arrayEntidad.length; i++){
                if ((arrayEntidad[i].x == tileX + 1) & (arrayEntidad[i].y == tileY)){
                    hayEntidad = true;
                    cualEntidad = i;
                }
            }
//Si hay bloque, ataca
            if ((hayEntidad == true) & (cualEntidad != -1)){
                if (palaMejorada == true){
                    arrayEntidad[cualEntidad].vida -= 3;
                }
                else{
                    arrayEntidad[cualEntidad].vida -= 1;
                }
                if (arrayEntidad[cualEntidad].vida <= 0){
                    let bloque = document.getElementById(`b${arrayEntidad[cualEntidad].num}`);
                    bloque.remove();
                    puntos = puntos + arrayEntidad[cualEntidad].puntos;
                    localStorage.setItem("puntos", puntos);
                    puntosDiv.innerText = puntos;
                    arrayEntidad.splice(cualEntidad, 1);
                }
                else if (arrayEntidad[cualEntidad].vida > 0){
                    vidaPersonaje = vidaPersonaje - (arrayEntidad[cualEntidad].ataque);
                    if (vidaPersonaje > 5){
                        vidaPersonaje = 5;
                    }
                    if(palaMejorada == true){
                        hud.innerHTML =`
                        <img src="img/hud2_${vidaPersonaje}.webp">`
                    }
                    else if(palaMejorada == false){
                        hud.innerHTML =`
                        <img src="img/hud1_${vidaPersonaje}.webp">`
                    }
                }
                localStorage.setItem("vidaPersonaje", vidaPersonaje);
            }
//Si no hay bloque, se mueve
            else{
                let personaje = document.getElementById('personaje');
                posH = posH + 60;
                personaje.style.left = posH + "px";
                tileX = tileX + 1;
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
        let random = randomInc(1,3);
        if(random == 1){
            arrayEntidad.push(new Entidad(1, 50, arrayX[i], arrayY[i], "tierra.webp", 0, i));
        }
        else if(random == 2){
            arrayEntidad.push(new Entidad(3, 100, arrayX[i], arrayY[i], "piedra.webp", 0, i));
        }
        else if(random == 3){
            arrayEntidad.push(new Entidad(2, 200, arrayX[i], arrayY[i], "cuca.png", 1, i));
        }
        let elementoBloque =`
        <img src="img/${arrayEntidad[i].imagen}" class="img" id="b${arrayEntidad[i].num}" style="left: ${(arrayEntidad[i].x * 60) + 300}px; top: ${(arrayEntidad[i].y * 60) + 35}px;">`;
        bloques.innerHTML += elementoBloque;
    }
//Evento recargar storage
    let recargar = document.getElementById("recargar");
    function reiniciarStorage(){
        localStorage.clear();
    }
    recargar.addEventListener("click", reiniciarStorage);
//Evento para moverse con las flechas del teclado
    function tecla(e){
        let event = e ? e:event
        let key = window.Event ? event.which : event.keyCode;
        if(key == 37){
            l();
        }
        else if(key == 38){
            u();
        }
        else if(key == 39){
            r();
        }
        else if(key == 40){
            d();
        }
    }
    let flechas = document.getElementById("flechas");
    flechas.addEventListener("keyup", tecla)
//Evento para mejorar la pala
    function mejorarPala(){
        if (puntos >= 600){
            mejorar.remove();
            palaMejorada = true;
            localStorage.setItem("palaMejorada", palaMejorada);
            hud.innerHTML =`
            <img src="img/hud2_${vidaPersonaje}.webp">`
        }
    }
    mejorar.addEventListener("click", mejorarPala);