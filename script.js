


const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let xRaquete1 = 5;
let yRaquete1 = 150;
let largura1 = 10;
let altura1 = 90;
let xRaquete2 = 585;
let yRaquete2 = 150;
//let velocidadeYoponente;
let xVelocidade = 6;
let yVelocidade = 6;

function drawElements() {


  //Variáveis da Bolinha
  ctx.beginPath();
  ctx.arc(xBolinha, yBolinha, diametro, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();


  //Variáveis da Raquete1
  
  //let yRaquete1 = 150;
  ctx.fillStyle = 'white';
  ctx.fillRect(xRaquete1, yRaquete1, largura1, altura1);

  //Variáveis da Raquete2
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

function movimentaRaquete2() {
  yRaquete2 = yBolinha - altura1 /2 - 30;
}

function movimentaBolinha() {
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

function upDateGame() {
  ctx.clearRect(0, 0, 600, 400);
  drawElements();
  movimentaBolinha();
  movimentaRaquete2();
  requestAnimationFrame(upDateGame)
}

document.addEventListener('keydown', (event) => {
  const key = event.code
  if (key === 'KeyW') {
    yRaquete1 -= 10;
  }

  if (key === 'KeyZ') {
    yRaquete1 += 10;
  }

})




upDateGame();