function Canvas (height, width, parent) {
  const canvas = document.createElement('canvas');

  canvas.setAttribute('height', height);

  canvas.setAttribute('width', width);
  
  parent.appendChild(canvas);

  this.height = height;
  this.width = width;
  this.canvas = canvas;
  
  this.ctx = this.canvas.getContext('2d');
} 

function Gallows(height, width, parent) {
  Canvas.call(this, height, width, parent);
}

Gallows.prototype.createGallows = function () {
  const image = new Image(500, 500);
  image.onload = () => {
    this.ctx.drawImage(image, 0, 0);
    this.ctx.drawImage(image, 0, 0, this.height, this.width);
  }

  image.src = 'assets/images/gallows.png';
}

Gallows.prototype.getCanvas = function () {
  return this.canvas;
}


export { Canvas, Gallows };