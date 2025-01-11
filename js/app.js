let modelos=document.querySelector('.modelos');
let estampa=document.querySelector('.estampa');


function mudaEstampa(stamp){

    switch(stamp){
        case 'bat':
            estampa.style.backgroundImage="url('img/batlover.jpg')";
            estampa.style.animation='fade 2s ';
            break;
        case 'dino':
            estampa.style.backgroundImage="url('img/dino.png')";
            estampa.style.animation='fade 2s ';
            break;
        case 'batman':
            estampa.style.backgroundImage="url('img/homem_bat.jpg')";
            estampa.style.animation='fade 2s ';
            break;
        case 'batgirl':
            estampa.style.backgroundImage="url('img/mulher_bat.jpg')";
            estampa.style.animation='fade 2s ';
            break;
        case 'maravilha':
            estampa.style.backgroundImage="url('img/won_W.jpg')";
            estampa.style.animation='fade 2s ';
            break;
    }

}

function mudaModel(modelo){
    switch(modelo){
        case 1:
            modelos.style.backgroundImage="url('img/modelo_M.jpg')";
            break;
        case 2:
            modelos.style.backgroundImage="url('img/modelo_F.jpg')";
            break;
       
    }

}