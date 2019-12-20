var planets = [
    ['sun', 'tamara', 'sinamis', 'rubiano'],
    ['#ffc800', '#7cb723', '#2370b8', '#9c28c2'],
    [100, 10, 25, 45],
    [0, 200, 320, 530]
];

var planetName = planets[0];
var planetColor = planets[1];
var planetSize = planets[2];
var planetOrbit = planets[3];

function getWindowCenterCoordinates() {
    var winHeight = window.innerHeight / 2;
    var winWidth = window.innerWidth / 2;

    console.log(`Height is ${winHeight} and width is ${winWidth}`);
}



function createPlanet() {



console.log(planetName);
console.log(planetColor);

var planetArrayLength = planetName.length;
var planetDiv;

for (var i = 0; i < planetArrayLength; i++) {
  planetDiv = document.createElement('div');
  planetDiv.className = 'galaxyObject';
  
  planetDiv.innerHTML = planetName[i];
  document.getElementsByTagName('body')[0].appendChild(planetDiv);
}

var planetElement = document.querySelectorAll('.galaxyObject');
console.log(planetElement);



for(var j = 0; j < planetColor.length; j++){
  planetElement[j].style.backgroundColor = planetColor[j];
  planetElement[j].style.top = "50%";
  planetElement[j].style.left = "50%";
  planetElement[j].style.position = "absolute";
  
  
}

for(var k = 0; k < planetSize.length; k++) {
  planetElement[k].style.height = `${planetSize[k] * 2}px`;
  planetElement[k].style.width = `${planetSize[k] * 2}px`; //increase the size of the planets
  console.log(`-${planetSize[k]/2}px`);

  // center the sun
  var centerSun = (planetSize[0] * 2) / 2;
  planetElement[0].style.marginLeft = `-${centerSun}px`;
  planetElement[0].style.marginTop = `-${centerSun}px`;
}

//set planet orbit
for(var l = 0; l < planetOrbit.length; l++) {
  
  planetElement[l].style.WebkitTransform = `translate(${planetOrbit[l]}px, ${planetOrbit[l]}px)`;
  planetElement[l].style.msTransform = `translate(${planetOrbit[l]}px, ${planetOrbit[l]}px)`; // Chrome, Safari and Opera
  planetElement[l].style.transform = `translate(${planetOrbit[l]}px, ${planetOrbit[l]}px)`; // Chrome, Safari and Opera
  

  // document.querySelector("body").style.perspectiveOrigin = `${planetOrbit[l]}px 50%`;
  // document.querySelector("body").style.WebkitPerspectiveOrigin = `${planetOrbit[l]}px 50%`;
}

}

createPlanet();
function angularVelocity() {
  for(var i = 0; i <= planetOrbit.length; i++) {
   return planetOrbit[i] * planetOrbit[i] * planetOrbit[i];
  }
}

console.log(angularVelocity());

function newAngle(){
  angularVelocity() * Math.pow(orbitRadius, -1.5) % 360;
}


var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');

function drawPlanetp(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}
window.requestAnimationFrame(drawPlanets)

//p square= perioud (Earth years
//a cubed = distance between planet and sun



window.addEventListener('resize', getWindowCenterCoordinates);

