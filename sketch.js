let d=[]
let co=0
function setup(){
  createCanvas(800,800,WEBGL)
  for(let i=0;i<600;i++){
    d[i]=new drop()
  }
  b=new barrier()
}
function draw() {
  background(0,9,57)
  translate(-width/2,-height/2,-50)
  rotateX(radians(20))
  for(let i=0;i<600;i++){
    strokeWeight(1.5)
    if(d[i].x>=b.x&&d[i].x<=b.x+b.s&&d[i].y>b.y){
      d[i].c=b.c
      d[i].flag = true
    }
    if(d[i].flag){
      stroke(200)
    } else {
      stroke(d[i].c)
    }
    fill(d[i].c)
    rect(d[i].x,d[i].y,d[i].w,d[i].s);
    d[i].fall();
    if (d[i].y>815){d[i]=new drop()}
  }
  fill(b.c[0], b.c[1], b.c[2], 20)
  strokeWeight(0)
  rect(b.x,b.y,b.s,780);
  stroke(b.c)
  strokeWeight(7)
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
    this.x=random(-50,850)
    this.y=random(-50, -40)
    this.c=[random(255), random(255), random(255)]
    this.w=random([2,3,4])
    this.flag=false
  }
  fall(){
    this.y+=this.s+this.y/200
  }
}
class barrier{
  constructor(){
    this.x = random(20, 750)
    this.y = random(20, 50)
    this.s = random(100, 200)
    this.c = [random(255), random(255), random(255)]
  }
}