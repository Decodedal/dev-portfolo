const canvas = document.querySelector('#canvas1')
const ctx = canvas.getContext('2d');
// console.log(ctx);
const particlesArr = []
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener('resize',()=>{
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })

const mouse ={
    x: undefined,
    y: undefined,
}
canvas.addEventListener('click',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i<100; i++){
        particlesArr.push(new Particle())
    }
    
})

canvas.addEventListener('mousemove',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
    // circles();
    for (let i = 0; i<3; i++){
        particlesArr.push(new Particle())
    }
    
})

// function drawCircle(){
    // ctx.fillStyle = 'green'
    // ctx.strokeStyle = 'red'
    // ctx.lineWidth = 1;
    // ctx.fillRect(150, 50, 500, 400)
    // ctx.beginPath();
    // ctx.arc(mouse.x,mouse.y,50,0  ,Math.PI * 2);
    // ctx.fill();
    // ctx.stroke();
//}
function animate(){
     ctx.clearRect(0,0,canvas.width, canvas.height);
    //ctx.fillStyle = 'rgba(0,0,0,0.1)'
    //ctx.fillRect(0,0,canvas.width,canvas.height);
    handleParticles();
    hue+=5
    requestAnimationFrame(animate)
}
animate();

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //  this.color = `hsl(${hue},100%,50%)`   
        this.color = colors[Math.floor(Math.random()*7)];
         this.x = Math.random() * canvas.width;
         this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() *3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2){
            this.size -=0.1;
        }
    }
    //creats circle 
    draw(){
       // ctx.fillStyle = colors[Math.floor(Math.random()*7)]
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0  ,Math.PI * 2);
        ctx.fill();
        // ctx.stroke();
     }
}

let colors = ['red','green','blue','purple','orange','violet','yellow']

// circles()
console.log(particlesArr)

function handleParticles(){
    for(let i = 0; i< particlesArr.length; i++){
        particlesArr[i].update();
        particlesArr[i].draw();

        for(let j = i; j< particlesArr.length;j++){
            const dx = particlesArr[i].x - particlesArr[j].x;
            const dy = particlesArr[i].y - particlesArr[j].y;
           const distance = Math.sqrt(dx*dx+dy*dy)
           if(distance < 100){
            ctx.beginPath();
            ctx.strokeStyle = particlesArr[i].color;
            ctx.lineWidth = particlesArr[i].size/10;
            ctx.moveTo(particlesArr[i].x, particlesArr[i].y)
            ctx.lineTo(particlesArr[j].x, particlesArr[j].y)
            ctx.stroke();
           }
        }
        if (particlesArr[i].size <= 3){
            particlesArr.splice(i,1);
            i--
        }
    }
    // particlesArr.forEach((p , i) =>{
    //     p.update();
    //     p.draw()
    //     if(p.size <= 0.3){
    //         p.splice(i,1);
    //         i--;

    //     }
    // })
}

// function circles(){
//     for(let i = 0; i<100; i++){
//      particlesArr.push(new Particle)
//     }
// }

