// var img, imgW, imgH, imgPath;
//
//
// imgPath = 'assets/instagram.jpg';
//
//
// function preload() {
//   img = loadImage(imgPath);
//
// }
//
// function setup() {
//   background(0);
//   createCanvas(960, 720);
//   // Top-left corner of the img is at (10, 10)
//   // Width and height are 50 x 50
//   //image(img, 0, 0);
//   loadPixels();
//   img.loadPixels();
//
//   imgW = img.width;
//   imgH = img.height;
//
//   console.log("width: " + imgW + ", height: " + imgH);
//   console.log("Image address: " + imgPath);
//
//
//
//
//
//
//
//   gridIt();
//
//   img.updatePixels();
//
// }
//
//
//
// function gridIt() {
//   for (var i = 0; i < imgW; i++) {
//     for (var j = 0; j < imgH; j++) {
//       var loc = i + j * width;
//       if (loc % 5 == 0) { // If we are an even column
//         pixels[loc] = color(255);
//       } else { // If we are an odd column
//         //pixels[loc] = color(0);
//       }
//     }
//   }Œ
// }

var worldImage, imgRitu, imgSq;
imgSq = 50;
function preload() {
  worldImage = loadImage("assets/instagram sm.png");
  imgRitu = loadImage("assets/ritu.jpg");
}


function setup() {
  createCanvas(1700, 1700);
}

function draw() {
  background(100);

  for (var x = 0; x < worldImage.width; x++) {
    for (var y = 0; y < worldImage.height; y++) {
      var in_color = worldImage.get(x, y);
      console.log(y, x);
      var r = red(in_color);
      var g = green(in_color);
      var b = blue(in_color);
      worldImage.set(x, y, in_color);
      worldImage.updatePixels();
      image(imgRitu,x*imgSq,y*imgSq,imgSq,imgSq);
      tint(in_color);
    }
  }
  noSmooth();
  //image(worldImage, 0, 0, width, height);
  noLoop();
}
