
function drawElements (){
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


//Variáveis da Bolinha
const xBolinha = 300;
const yBolinha = 200;
const diametro = 15;
ctx.beginPath();
ctx.arc(xBolinha, yBolinha, diametro, 0, Math.PI * 2);
ctx.fillStyle = 'white';
ctx.fill();
ctx.closePath();


//Variáveis da Raquete1
const xRaquete1 = 5;
const yRaquete1 = 150;
const largura1 = 10;
const altura1 = 90;
ctx.fillStyle = 'white';
ctx.fillRect(xRaquete1, yRaquete1, largura1, altura1);



//Variáveis da Raquete2
const xRaquete2 = 585;
const yRaquete2 = 150;
ctx.fillStyle = 'white';
ctx.fillRect(xRaquete2, yRaquete2, largura1, altura1);

//Placar

ctx.fillStyle = 'orange';
ctx.fillRect(150, 10, 40, 20);
ctx.strokeStyle = 'white';
ctx.strokeRect(150, 10, 40, 20);

ctx.fillStyle = 'orange';
ctx.fillRect(450, 10, 40, 20);
ctx.strokeStyle = 'white';
ctx.strokeRect(450, 10, 40, 20);

}

drawElements();