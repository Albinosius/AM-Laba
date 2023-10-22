window.addEventListener('DOMContentLoaded', function() {
  var ellipse = document.getElementById('ellipse');
  var dot = document.createElement('div');
  dot.id = 'dot';
  ellipse.appendChild(dot);

  var majorAxis = parseFloat(prompt('Введите размер большой полуоси эллипса:'));
  var minorAxis = parseFloat(prompt('Введите размер малой полуоси эллипса:'));
  
  ellipse.style.width = majorAxis + 'px';
  ellipse.style.height = minorAxis + 'px';
  
  var centerX = ellipse.offsetWidth / 2;
  var centerY = ellipse.offsetHeight / 2;
  var angle = 0;
  var speed = 0.02;

  

  function moveDot() {
    var x = centerX + majorAxis / 2 * Math.cos(angle);
    var y = centerY + minorAxis / 2 * Math.sin(angle);

    dot.style.left = (x - dot.offsetWidth / 2) + 'px';
    dot.style.top = (y - dot.offsetHeight / 2) + 'px';

    angle += speed;
    requestAnimationFrame(moveDot);
  }

  moveDot();
});