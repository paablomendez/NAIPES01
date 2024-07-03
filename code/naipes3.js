
function delay(milliseconds){
  return new Promise(resolve => {setTimeout(resolve, milliseconds);});
}
function seguir(){alert("");}
/*********************************/
/* FUNCIÓN PRINCIPAL DE ANIMACION*/
/*********************************/
function ordenacion(){
  for(let i=0;i<palos;i++){
    for(let j=0;j<cartas;j++){
        console.log("carta:"+i+"-"+j) 
        animaNaipe(i,j);
        //seguir();
    }
  }
}
/*
function animaNaipe(iCarta,iNumero){             
  for(const i of miBaraja){
    console.log("miBaraja("+i.paloNaipe+","+i.numeroNaipe+")");    
    if(i.paloNaipe==iCarta && i.numeroNaipe==iNumero){
      //console.log("miBaraja("+i.paloNaipe+","+i.numeroNaipe+")"); 
      console.log("mueveNaipe("+iCarta+","+iNumero+")"); 
      mueveNaipe(iCarta,iNumero); 
      break;
    }
    else{
      console.log("Naiper erróneo ====("+iCarta+","+iNumero+")"); 
      resalte(i.paloNaipe,i.numeroNaipe);
    }
    
  }
}*/
function animaNaipe(iCarta,iNumero){             
  const cantidad=miBaraja.length;
  for(let i=0;i<cantidad;i++){
    console.log("miBaraja("+miBaraja[i].paloNaipe+","+miBaraja[i].numeroNaipe+")");    
    if(miBaraja[i].paloNaipe==iCarta && miBaraja[i].numeroNaipe==iNumero){
      //console.log("miBaraja("+i.paloNaipe+","+i.numeroNaipe+")"); 
      console.log("mueveNaipe("+iCarta+","+iNumero+")"); 
      mueveNaipe(iCarta,iNumero); 
      return;
    }
    else{
      console.log("Naiper erróneo ====("+iCarta+","+iNumero+")"); 
      resalte(miBaraja[i].paloNaipe,miBaraja[i].numeroNaipe);
    }
    
  }
}
async function resalte(palo,naipe){
  const objeto=document.getElementById("carta"+palo+naipe);
  objeto.focus();                  
  await delay(500);
  objeto.blur();
  objeto.style.display="auto";
}
function mueveNaipe(iCarta,iNumero){
  const elemFuente=document.getElementById("carta"+iCarta+iNumero);
  const elemDestino=document.getElementById(paloNaipe[iCarta]);
  elemDestino.appendChild(elemFuente);
  elemFuente.style.display = "auto"; 
  

}