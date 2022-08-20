// Variáveis de vinculação canvas
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Tamanho Canvas
const width = 600;
const height = 400;


// Dados bolinha 
let xBolinha = 300;
let yBolinha = 200;
let raio = 15;


// Dados Raquete Esquerda (1)
let xRaquete1 = 5;
let yRaquete1 = 150;

// Dados Raquete Direita (2)
let xRaquete2 = 585;
let yRaquete2 = 150;

// Dados de altura e largura das Raquetes
let largura = 10;
let altura = 90;

//Velocidade do jogo
let xVelocidade = 3;
let yVelocidade = 0;

//Placar Jogador
let xPlacarEsquerda = 150;

//Placar Oponente
let xPlacarDireita = 450;

// Tamanho do placar
let widthPlacar = 40;
let heigthPlacar = 20;
let yPlacar = 10;

//Pontuação
let meusPontos = 0;
let pontosOponente = 0;


function drawElements() {
  //Criação da bolinha
  ctx.beginPath();
  ctx.arc(xBolinha, yBolinha, raio, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();

  //Criação da Raquete1
  ctx.fillStyle = 'white';
  ctx.fillRect(xRaquete1, yRaquete1, largura, altura);

  //Criação da Raquete2
  ctx.fillStyle = 'white';
  ctx.fillRect(xRaquete2, yRaquete2, largura, altura);

  //Criação do Placar
  //Placar 1
  ctx.fillStyle = 'orange';
  ctx.fillRect(xPlacarEsquerda, yPlacar, widthPlacar, heigthPlacar);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(xPlacarEsquerda, yPlacar, widthPlacar, heigthPlacar);
  ctx.fillStyle = 'white';
  ctx.font = '15px Calibri';
  ctx.fillText(meusPontos, 166, yPlacar / 2 + heigthPlacar);

  //Placar 2
  ctx.fillStyle = 'orange';
  ctx.fillRect(xPlacarDireita, yPlacar, widthPlacar, heigthPlacar);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(xPlacarDireita, yPlacar, widthPlacar, heigthPlacar);
  ctx.fillStyle = 'white';
  ctx.font = '15px Calibri';
  ctx.fillText(pontosOponente, 467, yPlacar / 2 + heigthPlacar);
}

//Função para verificar colisão com o campo de jogo
function verificaColisão() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    xVelocidade *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    yVelocidade *= -1;
  }
}
//Função para movimentar a raquete2
function movimentaRaquete2() {
  yRaquete2 = yBolinha - altura / 8 - 25;
}

//Função para movimentar a bolinha
function movimentaBolinha() {
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

//Função para identificar colisão da bolinha com a raquete
function verificaColisãoRaquete() {
  if (xBolinha + raio > xRaquete2 + largura / 2 &&
    yBolinha - raio < yRaquete2 + altura &&
    yBolinha + raio > yRaquete2) {
    xVelocidade *= -1;
  }
  if (xBolinha + raio < xRaquete1 + largura &&
    yBolinha + raio < yRaquete1 + altura &&
    yBolinha + raio < yRaquete1) {
    xVelocidade *= -1;
  }
}

//Marcador de Pontos
function pontos() {
  if (xBolinha > 585) {
    meusPontos += 1;
  }
  if (xBolinha < 15) {
    pontosOponente += 1;
  }
}

function gameOver() {
  if (pontosOponente > 15) {
    ctx.clearRect(0, 0, 600, 400);

    let img = new Image()
    img.src = 'GameOver.jpg'

    ctx.drawImage(img, 100, 90, 400, 200);
  }
}


//Função para animação do Game
function upDateGame() {
  ctx.clearRect(0, 0, 600, 400);
  drawElements();
  movimentaBolinha();
  movimentaRaquete2();
  verificaColisão();
  verificaColisãoRaquete();
  pontos();
  gameOver();
  requestAnimationFrame(upDateGame);
}


//Insrução para reconhecimento do Teclado
document.addEventListener('keydown', (event) => {
  const key = event.code
  if (key === 'KeyW') {
    yRaquete1 -= 30;
  }
  if (key === 'KeyS') {
    yRaquete1 += 30;
  }
})

// -------------------------------------------------------------------------





