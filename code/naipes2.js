


/* GENERAR LOS DIVS CON LAS CARTAS **************************** */
/* ************************************************************** */
/* ************************************************************** */
/* ************************************************************** */
/* ************************************************************** */
let contenedor = document.getElementById('muestraNaipes');
for (let i=0;i<miBaraja.length;i++){  
    let origen="img/baraja/"+miBaraja[i].paloNaipe+miBaraja[i].numeroNaipe+".png";
    let miId="carta"+miBaraja[i].paloNaipe+miBaraja[i].numeroNaipe;

    const tarjeta = document.createElement('div');
    tarjeta.className = "card";
    tarjeta.setAttribute("id",miId);
    tarjeta.setAttribute("tabindex",0);
    tarjeta.style.zIndex = 10+(i*2);

    contenedor.appendChild(tarjeta);
    
    const miCarta = document.getElementById(miId);

    const img = document.createElement('img');   

    img.src = origen;
    img.width = 76;
    img.height = 116;
    img.alt = "";

    miCarta.appendChild(img);
}

cartaGlobal="carta"+miBaraja[0].paloNaipe+miBaraja[0].numeroNaipe;


 