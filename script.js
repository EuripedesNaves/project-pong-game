
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const width = 600;
const height = 400;
let xBolinha = 300;
let yBolinha = 200;
let raio = 15;
let xRaquete1 = 5;
let yRaquete1 = 150;
let largura1 = 10;
let altura1 = 90;
let xRaquete2 = 585;
let yRaquete2 = 150;
let xVelocidade = 2;
let yVelocidade = 2;
let colidiu = false;

function drawElements() {


  //Variáveis da Bolinha
  ctx.beginPath();
  ctx.arc(xBolinha, yBolinha, raio, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();


  //Criação da Raquete1

  ctx.fillStyle = 'white';
  ctx.fillRect(xRaquete1, yRaquete1, largura1, altura1);

  //Criação da Raquete2
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

function verificaColisão() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    xVelocidade *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    yVelocidade *= -1;
  }
}


function movimentaRaquete2() {
 yRaquete2 = yBolinha - altura1/8 - 25;
}

function movimentaBolinha() {
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

function verificaColisãoRaquete() {
if(xBolinha + raio === xRaquete2 + largura1 &&
  yBolinha - raio < yRaquete2 + altura1 &&
  yBolinha + raio > yRaquete2) {
  xVelocidade *= -1;
}
if(xBolinha - raio === xRaquete1 + largura1 &&
   yBolinha - raio < yRaquete1 + altura1 &&
   yBolinha + raio > yRaquete1) {
  xVelocidade *= -1;
}

}
function upDateGame() {
  ctx.clearRect(0, 0, 600, 400);
  drawElements();
  movimentaBolinha();
  movimentaRaquete2();
  verificaColisão();
  verificaColisãoRaquete();
  requestAnimationFrame(upDateGame);
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