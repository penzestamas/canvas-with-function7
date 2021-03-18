var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function drawingPentagon(positionX, positionY, size, numberOfRows) {
  var alpha = 1;
  for (var rowCounter = 1; rowCounter <= numberOfRows; rowCounter++) {
    for (var pentagonCounter = 1; pentagonCounter <= rowCounter + rowCounter - 1; pentagonCounter++) {
      context.beginPath();
      context.moveTo(positionX, positionY);
      context.lineTo(positionX + size / 2, positionY + size / 2);
      context.lineTo(positionX + size * 0.25, positionY + size);
      context.lineTo(positionX - size * 0.25, positionY + size);
      context.lineTo(positionX - size / 2, positionY + size / 2);
      context.strokeStyle = 'rgba(0,0,255,' + alpha + ')';
      context.fillStyle = 'rgba(0,0,255,' + alpha + ')';
      context.stroke();
      context.fill();
      positionX += size;
    }
    positionX -= size * (2 * rowCounter);
    positionY += size;
    alpha -= 0.2;
  }
}

drawingPentagon(225, 10, 30, 5);