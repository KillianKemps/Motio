// originates from a stack overflow question

var app = angular.module('app.directives', []);

app.directive('userPic', function(){
  function link(scope, element) {
    var ctx = element[0].getContext('2d');
    var img = new Image();
    img.src = scope.user.img || '/img/helmet_dude.jpg';
    img.onload = function () {
      // ctx.globalCompositeOperation = 'destination-in';
      ctx.drawImage(img,3,3,97,107);
      ctx.fillStyle = '#ffffff';

      // Switch the blending mode
      ctx.globalCompositeOperation = 'destination-in';
      // Draw the hexagon shape to mask the image
      ctx.beginPath();
      ctx.moveTo(59, 7);
      ctx.lineTo(85, 21);
      ctx.quadraticCurveTo(97, 28, 97, 41);
      ctx.lineTo(97, 69);
      ctx.quadraticCurveTo(97, 82, 85, 89);
      ctx.lineTo(59, 103);
      ctx.quadraticCurveTo(50, 108, 41, 103);
      ctx.lineTo(15, 89);
      ctx.quadraticCurveTo(3, 82, 3, 69);
      ctx.lineTo(3, 41);
      ctx.quadraticCurveTo(3, 28, 15, 21);
      ctx.lineTo(41, 7);
      ctx.quadraticCurveTo(50, 2, 59, 7);
      ctx.fill();
      ctx.closePath();

      ctx.globalCompositeOperation = 'destination-over';
      ctx.beginPath();
      ctx.moveTo(62, 4);
      ctx.lineTo(88, 18);
      ctx.quadraticCurveTo(100, 25, 100, 38);
      ctx.lineTo(100, 72);
      ctx.quadraticCurveTo(100, 85, 88, 92);
      ctx.lineTo(62, 106);
      ctx.quadraticCurveTo(50, 113, 38, 106);
      ctx.lineTo(12, 92);
      ctx.quadraticCurveTo(0, 85, 0, 72);
      ctx.lineTo(0, 38);
      ctx.quadraticCurveTo(0, 25, 12, 18);
      ctx.lineTo(38, 4);
      ctx.quadraticCurveTo(50, -3, 62, 4);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.closePath();
    };
  }

  return {
    restrict: 'A',
    scope: {
      user: '='
    },
    link: link
  };
});
