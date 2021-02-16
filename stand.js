class Stand{
    constructor(x,y,width){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,20, options)
        this.width = width
        World.add(world, this.body)
        
    }
    display(){
        fill("brown")
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, 20)
    }
}