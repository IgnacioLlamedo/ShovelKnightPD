let i = Number;
const arrayX = [];
const bloques = document.getElementById('bloques');
let posV = 90;
let posH = 195;
let tileY = 1;
let tileX = 1;
let puntos = 0;
const puntosDiv = document.querySelector('#puntos span');
puntosDiv.innerText = puntos;
const girarPersonaje = document.querySelector('#personaje');
class entidad{
    constructor(vida, puntos, x, y, imagen){
        this.vida = vida;
        this.puntos = puntos;
        this.x = x;
        this.y = y;
        this.imagen = imagen;
    }
}
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
    console.log(arrayX)
}
//funciones para atacar
    function atacar1(){
        bloque1.vida -= 1
        if(bloque1.vida <= 0){
            let destruir = document.getElementById('t1');
            destruir.remove();
            puntos = puntos + parseInt(50, 10);
            puntosDiv.innerText = puntos;
            bloque1.y = -1;
            bloque1.x = -1;
        }
    }
    function atacar2(){
        bloque2.vida -= 1
        if(bloque2.vida <= 0){
            let destruir = document.getElementById('t2');
            destruir.remove();
            puntos = puntos + parseInt(50, 10);
            puntosDiv.innerText = puntos;
            bloque2.y = -1;
            bloque2.x = -1;
        }
    }
    function atacar3(){
        bloque3.vida -= 1
        if(bloque3.vida <= 0){
            let destruir = document.getElementById('t3');
            destruir.remove();
            puntos = puntos + parseInt(50, 10);
            puntosDiv.innerText = puntos;
            bloque3.y = -1;
            bloque3.x = -1;
        }
    }
    function atacar4(){
        bloque4.vida -= 1
        if(bloque4.vida <= 0){
            let destruir = document.getElementById('t4');
            destruir.remove();
            puntos = puntos + parseInt(50, 10);
            puntosDiv.innerText = puntos;
            bloque4.y = -1;
            bloque4.x = -1;
        }
    }
    function atacar5(){
        bloque5.vida -= 1
        if(bloque5.vida <= 0){
            let destruir = document.getElementById('p1');
            destruir.remove();
            puntos = puntos + parseInt(100, 10);
            puntosDiv.innerText = puntos;
            bloque5.y = -1;
            bloque5.x = -1;
        }
    }
    function atacar6(){
        bloque6.vida -= 1
        if(bloque6.vida <= 0){
            let destruir = document.getElementById('p2');
            destruir.remove();
            puntos = puntos + parseInt(100, 10);
            puntosDiv.innerText = puntos;
            bloque6.y = -1;
            bloque6.x = -1;
        }
    }
    function atacar7(){
        bloque7.vida -= 1
        if(bloque7.vida <= 0){
            let destruir = document.getElementById('p3');
            destruir.remove();
            puntos = puntos + parseInt(100, 10);
            puntosDiv.innerText = puntos;
            bloque7.y = -1;
            bloque7.x = -1;
        }
    }
    function atacarU(){
        if(((bloque1.y + 1) == tileY) & (bloque1.x == tileX)){
            atacar1();
        }
        else if(((bloque2.y + 1) == tileY) & (bloque2.x == tileX)){
            atacar2();
        }
        else if(((bloque3.y + 1) == tileY) & (bloque3.x == tileX)){
            atacar3();
        }
        else if(((bloque4.y + 1) == tileY) & (bloque4.x == tileX)){
            atacar4();
        }
        else if(((bloque5.y + 1) == tileY) & (bloque5.x == tileX)){
            atacar5();
        }
        else if(((bloque6.y + 1) == tileY) & (bloque6.x == tileX)){
            atacar6();
        }
        else if(((bloque7.y + 1) == tileY) & (bloque7.x == tileX)){
            atacar7();
        }
    }
    function atacarD(){
        if(((bloque1.y - 1) == tileY) & (bloque1.x == tileX)){
            atacar1();
        }
        else if(((bloque2.y - 1) == tileY) & (bloque2.x == tileX)){
            atacar2();
        }
        else if(((bloque3.y - 1) == tileY) & (bloque3.x == tileX)){
            atacar3();
        }
        else if(((bloque4.y - 1) == tileY) & (bloque4.x == tileX)){
            atacar4();
        }
        else if(((bloque5.y - 1) == tileY) & (bloque5.x == tileX)){
            atacar5();
        }
        else if(((bloque6.y - 1) == tileY) & (bloque6.x == tileX)){
            atacar6();
        }
        else if(((bloque7.y - 1) == tileY) & (bloque7.x == tileX)){
            atacar7();
        }
    }
    function atacarL(){
        if(((bloque1.x + 1) == tileX) & (bloque1.y == tileY)){
            atacar1();
        }
        else if(((bloque2.x + 1) == tileX) & (bloque2.y == tileY)){
            atacar2();
        }
        else if(((bloque3.x + 1) == tileX) & (bloque3.y == tileY)){
            atacar3();
        }
        else if(((bloque4.x + 1) == tileX) & (bloque4.y == tileY)){
            atacar4();
        }
        else if(((bloque5.x + 1) == tileX) & (bloque5.y == tileY)){
            atacar5();
        }
        else if(((bloque6.x + 1) == tileX) & (bloque6.y == tileY)){
            atacar6();
        }
        else if(((bloque7.x + 1) == tileX) & (bloque7.y == tileY)){
            atacar7();
        }
    }
    function atacarR(){
        if(((bloque1.x - 1) == tileX) & (bloque1.y == tileY)){
            atacar1();
        }
        else if(((bloque2.x - 1) == tileX) & (bloque2.y == tileY)){
            atacar2();
        }
        else if(((bloque3.x - 1) == tileX) & (bloque3.y == tileY)){
            atacar3();
        }
        else if(((bloque4.x - 1) == tileX) & (bloque4.y == tileY)){
            atacar4();
        }
        else if(((bloque5.x - 1) == tileX) & (bloque5.y == tileY)){
            atacar5();
        }
        else if(((bloque6.x - 1) == tileX) & (bloque6.y == tileY)){
            atacar6();
        }
        else if(((bloque7.x - 1) == tileX) & (bloque7.y == tileY)){
            atacar7();
        }
    }
//Funciones para mover al personaje
    function u(){
        if(posV > 90){
            if(((bloque1.y + 1 == tileY)&(bloque1.x == tileX))|((bloque2.y + 1 == tileY)&(bloque2.x == tileX))|((bloque3.y + 1 == tileY)&(bloque3.x == tileX))|((bloque4.y + 1 == tileY)&(bloque4.x == tileX))|((bloque5.y + 1 == tileY)&(bloque5.x == tileX))|((bloque6.y + 1 == tileY)&(bloque6.x == tileX))|((bloque7.y + 1 == tileY)&(bloque7.x == tileX))){
                atacarU();
            }
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
            if(((bloque1.y - 1 == tileY)&(bloque1.x == tileX))|((bloque2.y - 1 == tileY)&(bloque2.x == tileX))|((bloque3.y - 1 == tileY)&(bloque3.x == tileX))|((bloque4.y - 1 == tileY)&(bloque4.x == tileX))|((bloque5.y - 1 == tileY)&(bloque5.x == tileX))|((bloque6.y - 1 == tileY)&(bloque6.x == tileX))|((bloque7.y - 1 == tileY)&(bloque7.x == tileX))){
                atacarD();
            }
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
        <img src="img/shovel_knightL.png" alt="" class="img">`
        if(posH > 195){
            if(((bloque1.x + 1 == tileX)&(bloque1.y == tileY))|((bloque2.x + 1 == tileX)&(bloque2.y == tileY))|((bloque3.x + 1 == tileX)&(bloque3.y == tileY))|((bloque4.x + 1 == tileX)&(bloque4.y == tileY))|((bloque5.x + 1 == tileX)&(bloque5.y == tileY))|((bloque6.x + 1 == tileX)&(bloque6.y == tileY))|((bloque7.x + 1 == tileX)&(bloque7.y == tileY))){
                atacarL();
            }
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
        <img src="img/shovel_knightR.png" alt="" class="img">`
        if(posH < 550){
            if((((bloque1.x - 1 == tileX)&(bloque1.y == tileY))|((bloque2.x - 1 == tileX)&(bloque2.y == tileY))|((bloque3.x - 1 == tileX)&(bloque3.y == tileY))|((bloque4.x - 1 == tileX)&(bloque4.y == tileY))|((bloque5.x - 1 == tileX)&(bloque5.y == tileY))|((bloque6.x - 1 == tileX)&(bloque6.y == tileY))|((bloque7.x - 1 == tileX)&(bloque7.y == tileY)))){
                atacarR();
            }
            else{
                let personaje = document.getElementById('personaje');
                posH = posH + 60;
                personaje.style.left = posH + "px";
                tileX = tileX + 1;
            }
        }
    }
//Esto es para crear los bloques aleatoriamente, perdón por el choclazo de texto, pero las otras formas de escribirlo (un "for", por ejemplo) resultaban en una iteración infinita y se trababa todo
    let bloque1 = new entidad(1, 50, arrayX[0], 7, "tierra.jpg")
    let tierra1 = document.getElementById('t1');
    t1.style.display = "flex";
    t1.style.left = (bloque1.x * 60) + 135 + "px";
    t1.style.top = (bloque1.y * 60)+ 35 + "px";
    let bloque2 = new entidad(1, 50, arrayX[1], 7, "tierra.jpg")
    let tierra2 = document.getElementById('t2');
    t2.style.display = "flex";
    t2.style.left = (bloque2.x * 60) + 135 + "px";
    t2.style.top = (bloque2.y * 60)+ 35 + "px";
    let bloque3 = new entidad(1, 50, arrayX[2], 7, "tierra.jpg")
    let tierra3 = document.getElementById('t3');
    t3.style.display = "flex";
    t3.style.left = (bloque3.x * 60) + 135 + "px";
    t3.style.top = (bloque3.y * 60)+ 35 + "px";
    let bloque4 = new entidad(1, 50, arrayX[3], 7, "tierra.jpg")
    let tierra4 = document.getElementById('t4');
    t4.style.display = "flex";
    t4.style.left = (bloque4.x * 60) + 135 + "px";
    t4.style.top = (bloque4.y * 60)+ 35 + "px";
    let bloque5 = new entidad(3, 100, arrayX[4], 7, "piedra.jpg")
    let piedra1 = document.getElementById('p1');
    p1.style.display = "flex";
    p1.style.left = (bloque5.x * 60) + 135 + "px";
    p1.style.top = (bloque5.y * 60)+ 35 + "px";
    let bloque6 = new entidad(3, 100, arrayX[5], 7, "piedra.jpg")
    let piedra2 = document.getElementById('p2');
    p2.style.display = "flex";
    p2.style.left = (bloque6.x * 60) + 135 + "px";
    p2.style.top = (bloque6.y * 60)+ 35 + "px";
    let bloque7 = new entidad(3, 100, arrayX[6], 7, "piedra.jpg")
    let piedra3 = document.getElementById('p3');
    p3.style.display = "flex";
    p3.style.left = (bloque7.x * 60) + 135 + "px";
    p3.style.top = (bloque7.y * 60)+ 35 + "px";