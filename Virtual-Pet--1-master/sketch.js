//Create variables here
var dog;

var hypotonicDog, database;
var position;


function setup() {
  database = firebase.database();
  console.dog(database);
  createCanvas(800,700);

  hypotonticDog = createSprite(250,250,10,10);
  hypotonticDog.shapeColor = "brown";    

  var hypotonticDogPosition = database.ref('dog/position');
  hypotonticDogPosition.on("value", readPosition, showError);
}


function draw() {  
  background("white");
  if(position !==undefined){ 
    if(keyDown(LEFT_ARROW)){
    changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
  }}
 

  drawSprites();
  //add styles here

}

function writePosition(x,y){
  database.ref('dog/position').set({
    'x': position.x + x;
    'y': position.y + y;
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypotonticDog.x = position.x;
  hypotonticDog.y = position.y;

}

function changePosition(x,y){
  dog.x = dog.x + x;
  dog.y = dog.y + y;
}


