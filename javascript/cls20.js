function draw(){
    /*var x=document.getElementById('c1')
    c1=x.getContext('2d')
    c1.fillStyle="aqua"
    c1.strokeStyle="blue"
    c1.strokeRect(10,10,100,100)
    c1.fillRect(10,10,100,100)*/


    //using gradient
   /* var x=document.getElementById('c1')
    c1=x.getContext('2d')
    var gradient=c1.createLinearGradient(0,0,100,100)
    gradient.addColorStop(0.3,"yellow")
    gradient.addColorStop(0.9,"blue")
    c1.fillStyle=gradient
    c1.fillRect(10,10,100,100)*/


    //draw a star using canvas
    var x=document.getElementById('c1')
    c1=x.getContext('2d')
    c1.fillStyle="blue"
    c1.beginPath()
    c1.moveTo(150,50)
    c1.lineTo(150,200)
    c1.lineTo(100,200)
    c1.lineTo(200,150)
    c1.lineTo(150,50)
    c1.fill()
    c1.stroke()



    //
}
window.addEventListener("load",draw)