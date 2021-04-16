let d=[]
let co=0
function setup(){
  createCanvas(400,400,WEBGL)
  for(let i=0;i<400;i++){
    d[i]=new drop()
  }
  b=new barrier()
}
function draw() {
  background(0,9,57)
  translate(-width/2,-height/2,-50)
  rotateX(radians(20))
  for(let i=0;i<400;i++){
    strokeWeight(d[i].w)
    if(d[i].x>=b.x&&d[i].x<=b.x+b.s&&d[i].y>b.y){
      stroke(30)
    }else{
      stroke(d[i].c)
    }
    line(d[i].x,d[i].y,d[i].x,d[i].y+d[i].s);
    d[i].fall();
    if (d[i].y>415){d[i]=new drop()}
  }
  stroke(255)
  strokeWeight(6)
  line(b.x,b.y,b.x+b.s,b.y);
  co++;
  if(co==200){
    co=0;
    b=new barrier()
  }
}
class drop{
  constructor(){
    this.s=random(6,12)
    this.x=random(-50,450)
    this.y=random(-50, -40)
    this.c=[random(255), random(255), random(255)]
    this.w=random([2,3,4])
  }
  fall(){
    this.y+=this.s/2+this.y/100
  }
}
class barrier{
  constructor(){
    this.x = random(20, 300)
    this.y = random(20, 50)
    this.s = random(100, 200)
  }
}