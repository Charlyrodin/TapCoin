let coinImg, buttonImg, backgroundImg; // Variables para las imágenes
let coins = 0; // Contador de monedas
let buttonX, buttonY, buttonSize; // Posición y tamaño del botón

function preload() {
  // Cargar imágenes desde los enlaces proporcionados
  coinImg = loadImage("https://i.postimg.cc/kMLh5644/coin.png");
  buttonImg = loadImage("https://i.postimg.cc/bwhCQ71f/background.jpg");
  backgroundImg = loadImage("https://i.postimg.cc/bwhCQ71f/background.jpg");
}

function setup() {
  createCanvas(400, 600); // Tamaño de la pantalla
  buttonX = width / 2; // Centrar el botón
  buttonY = height / 2;
  buttonSize = 100;
  textAlign(CENTER, CENTER); // Alinear texto
}

function draw() {
  // Dibujar el fondo
  background(backgroundImg);

  // Mostrar el contador de monedas
  fill(255);
  textSize(24);
  text("Coins: " + coins, width / 2, 50);

  // Dibujar el botón usando la imagen
  image(buttonImg, buttonX - buttonSize / 2, buttonY - buttonSize / 2, buttonSize, buttonSize);

  // Opcional: Mostrar una moneda decorativa
  image(coinImg, 20, 20, 40, 40); // Moneda decorativa en la esquina
}

// Detectar clics
function mousePressed() {
  // Verificar si el clic está dentro del botón
  let d = dist(mouseX, mouseY, buttonX, buttonY);
  if (d < buttonSize / 2) {
    coins++; // Incrementar monedas
  }
}
