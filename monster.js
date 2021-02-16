class Monster{
    constructor(){
        var options = {
            restitution: 0.5,
            friction: 0.3,
            density: 0.5
            //isStatic: true
        }
        this.image = loadImage("Images/Monster-01.png")
        this.body = Bodies.rectangle(1170,350,250,250, options)
        World.add(world, this.body)
    }
    display(){
        push()
        //stroke(255, 0, 102)
        //strokeWeight(3)
        //fill("pink")
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0,0,250,250)
        pop()
    }
}