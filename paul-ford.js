


var canvas= document.getElementById('canvas'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


    
var x = 200;
    function animate() {
        requestAnimationFrame(animate);

        c.beginPath();
        c.arch(x, 200, 30, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue'; 
        c.stroke();

        x += 1;
    }

// var mouse = {
//     x: undefined, 
//     y: undefined
// }

// window.addEventListener('mousemove', 

// function(event) {
//     mouse.x = event.x; 
//     mouse.y = event.y;

// })

// function Circle(x,y, dx, dy, radius){
//         this.x=x;
//         this.y=y;
//         this.dx=dx;
//         this.dy=dy; 
//         this.radius=radius; 

//         this.draw = function() {
//             c.beginPath(); 
//             c.arch(this.x, this.y, this.radius, 0,
//               Math.PI * 2, false  ); 
            
//             c.strokeStyle='blue';
//             c.stroke(); 
//             c.fill();
//         }
// }

// this.update = function() {
//      if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }


//         if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//                 this.dy = -this.dy;
//             }

//             this.x += this.dx;
//             this.y += this.dy;

//             this.draw();
// }


// //var circle = new Circle(200,200,3,3, 30); 

// var circleArray=[]; 


// for(var i = 0; i < 100; i++){
//     var radius = 30;
// var x = Math.random() * (innerWidth - radius * 2) + radius;
// var y = Math.random() * (innerHeight - radius * 2) + radius;
// var dx = (Math.random() -0.5) ; //can add a number between ) and ;
// var dy = (Math.random() -0.5) ; //number can be added, sub, mult, div alters speed

//     circleArray.push(new Circle(x, y, dx, dy, radius)); 

// }

// function animate() {
//         requestAnimationFrame(animate); 
//         c.clearRect(0,0, innerWidth, innerHeight);

//         for(var i = 0; 1<circleArray.length; i++)
//         {
//             circleArray[i].update();
//         }

// }

//interactivity 

//if(mouse.x - this.x<50 && mouse.x - this.x >  -50
//    && mouse.y - this.y <50 && mouse.y - this.y > -50
//    ) {
//    this.radius += 1;
//}  else if(this.radius >  2){
//    this.radius -= 1;
//}


//    this.draw(); 

//}