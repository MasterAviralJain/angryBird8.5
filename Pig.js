class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255

  }


  display(){
//console.log(this.body.speed);
var pos=this.body.position;

if (this.body.speed<2.5){
  super.display();
}else{
  push ();
  World.remove(world,this.body);
  this.visiblity=this.visiblity-4
tint (255,this.visiblity);
image (this.image,pos.x,pos.y,50,50)
pop ();

}





  }

score(){

if (this.visiblity<0&&this.visiblity>-400){

  score++
}


}


};