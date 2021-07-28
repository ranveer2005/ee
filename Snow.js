class Snow{
    constructor(){
        var options={
            friction:2,
            density:1
        }
        this.snow = Bodies.Circle(Random(0,800),0,20,options)
        this.image = loadImage("snow4.webp")

    }
    display(){
        image(this.image,this.snow.position.x,this.snow.position.y,20)
    }
        
}