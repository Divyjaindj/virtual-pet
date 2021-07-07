function setup() {
	createCanvas(500,500)
	database = firebase.database()

	foodstock=database.ref('food');
	foodstock.on("value",(readstock)=>{
		foodS = readstock.val();
	});

	dog= createSprite(500,200,30,30);

}
function draw() {
	background(46, 139, 87);

	if (keyDown(UP_ARROW)) {
		writeStock(foodS)
	}





	drawSprites();
}

function writeStock(x) {

	if(x<=0){
		x=0
	}
	else{
		x=x-1
	}

	var foodstocku = database.ref('/').update({
		food: x
	})
}