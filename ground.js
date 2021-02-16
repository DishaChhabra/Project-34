class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(600,550,1200,20, options)
        World.add(world, this.body)
    }
    display(){
        fill("white")
        rectMode(CENTER)
        rect(600,550,1200,20)
    }
}