let coinImg;
let buttonImg;
let backgroundImg;

function preload() {
  coinImg = loadImage("https://i.postimg.cc/kMLh5644/coin.png");
  buttonImg = loadImage("https://i.postimg.cc/bwhCQ71f/background.jpg");
  backgroundImg = loadImage("https://i.postimg.cc/bwhCQ71f/background.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(backgroundImg); // Usamos la imagen de fondo

  // Dibujamos la imagen de la moneda
  image(coinImg, width / 2 - coinImg.width / 2, height / 2 - coinImg.height / 2);

  // Dibujamos el botón (puedes ajustar la posición según sea necesario)
  image(buttonImg, 50, 500);
}
