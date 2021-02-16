class Hero{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            friction: 0.3,
            density: 0.5
        }
        this.image = loadImage("Images/Superhero-01.png")
        this.body = Bodies.rectangle(x,y,350,150, options)
        World.add(world, this.body)
    }
    display(){
        push()
        //strokeWeight(3)
        //fill("brown")
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        imageMode(RADIUS)
        image(this.image, 0,0,350,150)
        pop()
    }
}