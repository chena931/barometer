var city;
var cloud;
var cloudSize;
var wind;
var windPosition = 0;

var temperature;
var humidity;

var sunrise;
var sunset;


function preload() {
  
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=Taipei,TW'+
   '&APPID=f02124924447c73bc1d1626b1bee5f45';
  city = loadJSON(url);
  wind = loadImage("../assets/wind.png");

}

function setup() {
  
  createCanvas(400,400);
  clouds = city.clouds.all;
  cloudSize = 5*clouds/2;
  

  sunrise = new Date (city.sys.sunrise*1000);
  sunset = new Date(city.sys.sunset*1000);

}

function draw() {

var humidity = city.main.humidity;
var temperature = city.main.temp -  273.15;

colorMode(HSB,360,100,100,1);
background(210,humidity,100);

noStroke();
textSize(60);
	fill("#243A78");
	text(humidity + "%", 50,380);
	ellipse(30,370,30,30);
	triangle(30,340,15,365,45,365);
	fill("#A62F1C");
	text(floor(temperature) + "°C", 10,300);
textSize(12);
	fill("white");
	text("Click for Clouds",310,105);

for (var x = 0; x < temperature; x++){
	strokeWeight(1);
	stroke("A62F1C");
	line(0, windowHeight-x*10, windowWidth,windowHeight-x*10);
}

if (mouseIsPressed){

	fill("white");
	strokeWeight(0);
	ellipse(mouseX+random(0,10),mouseY+random(0,10),cloudSize,cloudSize);
	textSize(15);
	fill("lightblue");
	text("Cloud:" + city.clouds.all,mouseX,mouseY);
}

windPosition = windPosition + city.wind.speed*5;
if (windPosition > windowWidth){
	windPosition = 0
}
	image(wind,windPosition, 100,wind.width,wind.height);




textSize(20);
	textAlign(LEFT);
	strokeWeight(0);
	fill("black");
	rect(0,50,1800,40);
	fill("yellow");
	text(sunrise.toLocaleTimeString(), 22,75);

	fill("white");
	text(sunset.toLocaleTimeString(), 280,75);

	text("Taipei",22,40);


	

}