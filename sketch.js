
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgr;
var ground,ground2,ground3,ground4,ground5;
var polygon;
var backgroundImg,sling; 
var object1,object2,object3,object4,object5,object6,object7,object8,object9,object10,object11,object12,object13,object14,object15;

var gameState = "onSling";
var bg = "bg1.png";

var score = 0;


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,690,1200,30);
    ground2=new Ground(2,690,1200,30);

    ground2 = new Ground(600,450,450,20,);
    polygon= new Polygon(200,350,2,2);
    sling = new SlingShot(polygon.body,{x:200, y:350});
    object1 = new Blue(430,350);
    object2 = new Blue(505,350);
    object3 = new Blue(580,350);
    object4 = new Blue(655,350);
    object5 = new Blue(730,350);
    object6 = new Blue(465,300);
    object7 = new Blue(540,300);
    object8 = new Blue(615,300);
    object9 = new Blue(690,300);
    object10 = new Blue(505,250);
    object11 = new Blue(580,250);
    object12 = new Blue(655,250);
    object13 = new Blue(540,200);
    object14 = new Blue(615,200);
    object15 = new Blue(580,150);

















}

function draw(){
    if(backgroundImg)
     background(backgroundImg);

    noStroke();
        textSize(35)
        fill(80,57,211);
        text("Score  " + score, width-300, 50)
        fill(80,57,211);
        text("Press Space For An Another Chance.",100,40);

        Engine.update(engine);



    ground1.display();
    ground2.display();

    polygon.display();
    sling.display();
    object1.display();
    object2.display();
    object3.display();
    object4.display();
    object5.display();
    object6.display();
    object7.display();
    object8.display();
    object9.display();
    object10.display();
    object11.display();
    object12.display();
    object13.display();
    object14.display();
    object15.display();


    object1.score();
    object2.score();
    object3.score();
    object4.score();
    object5.score();
    object6.score();
    object7.score();
    object8.score();
    object9.score();
    object10.score();
    object11.score();
    object12.score();
    object13.score();
    object14.score();
    object15.score();


   







}




function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";

}
function keyPressed(){
    if(keyCode === 32 && polygon.body.speed < 1 ){
        Matter.Body.setPosition(polygon.body,{x : 200,y : 350});
       sling.attach(polygon.body);
       gameState = "onSling";

    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}



