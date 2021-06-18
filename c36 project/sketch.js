//Create variables here
var dog,happydog, database,foodS,foodStock,dogimage1,dogimage2

function preload()
{
	//load images here
 dogimage1=loadImage("images/dogImg.png")
 dogimage2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addimage(dogHappy);
}
  drawSprites();
  //add styles here
textSize(30)
fill('blue')
text('note:move up arrow key to feed',100,50)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

