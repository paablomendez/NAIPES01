/* FUNCION PARA RETORNAR UN NÚMERO ALEATORIO ENTRE 0 Y EL nÚMERO QUE SE LE PASE*/
function sacaRandom(max) {
    return Math.floor(Math.random() * max);
}
/* FUNCIÓN PARA DEVOLVER 2 NÚMEROS ALEATORIOS ENTRE 0 Y 4, Y ENTRE 0 Y 10 */
function generaNaipe(palo,carta){
  return[sacaRandom(palo),sacaRandom(carta)];
}
/*FUNCIÓN PARA RETORNAR VERDADERO SI LOS NÚMEROS QUE SE LE PASAN YA ESTÁN ALMACENADOS*/
function encontroNaipe(palo,numero){
  for(let x of miBaraja){
    if(x.paloNaipe==palo && x.numeroNaipe==numero){return(true)};
  }
  return(false);
}
/* FUNCIÓN PARA RETORNAR LA POSICIÓN DE UN NAIPE EN CONCRETO........................*/
function buscaPosicion(palo,numero){
  for(let i=0;i<40;i++){
    if(miBaraja[i].paloNaipe==palo && miBaraja[i].numeroNaipe==numero){return(i)};
  }
}
const palos=4;
const cartas=10;
let cartaGlobal="";
const miBaraja =[];
const miMazo = [];
const paloNaipe =["oros","copas","espadas","bastos"];
const totalCartas =palos*cartas;

for (let i = 0; i < palos; i++) {
    miMazo.push(new Array(cartas).fill(0));
}
for(let i=0; i<totalCartas; i++){
  let valorNaipe=[];
  do {
    valorNaipe = generaNaipe(palos,cartas);
    paloGenerado=valorNaipe[0];
    numeroGenerado= valorNaipe[1];
  }
  while (encontroNaipe(paloGenerado,numeroGenerado));  
  let miNaipe = {paloNaipe:paloGenerado,numeroNaipe:numeroGenerado} ; 
  miBaraja.push(miNaipe);
}
for(let i=0;i<palos;i++){
  for(let j=0;j<cartas;j++){
    miMazo[i][j]=buscaPosicion(i,j);
  }  
}
