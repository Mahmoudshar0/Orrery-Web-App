let imgs = ["../images/mercury.png", "../images/venus.png", "../images/earth.png", "../images/mars.png", "../images/jupiter.png", "../images/saturn.png", "../images/uranus.png", "../images/neptune.png" , "../images/sun.png"];
let shads = ["#d8d8d8", "#d79755", "#d6e6ff", "#EFA463", "#C8C3C0", "#D5BC8B", "#B1E7EA", "#71C3FB" , "#ff8507"];
let planetsName = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune" , "sun"];
let planetsDes = ["Mercury is the smallest planet in our solar system and the closest to the Sun. It has a very thin atmosphere, leading to extreme temperature changes between day and night. Its surface is covered with craters, similar to the Moon.",
                  "Venus is similar in size to Earth but has a thick atmosphere made mostly of carbon dioxide. It experiences an intense greenhouse effect, making it the hottest planet in our solar system. Its surface is dotted with volcanoes and is very dry.",
                  "Earth is the only planet known to support life. It has a moderate atmosphere that allows liquid water to exist on the surface, creating a stable environment for diverse ecosystems. Earth has a strong magnetic field and one natural satellite, the Moon.",
                  "Mars is known as the \"Red Planet\" because of its iron oxide-rich surface. It has the largest volcano in the solar system, Olympus Mons, and polar ice caps. Though cold and dry now, scientists believe Mars may have had liquid water in the past.",
                  "Jupiter is the largest planet in the solar system and is known for its Great Red Spot, a massive storm that has lasted for centuries. It’s a gas giant made mostly of hydrogen and helium and has over 70 moons, including the largest moon, Ganymede.",
                  "Saturn is famous for its extensive ring system made of ice and rock particles. Like Jupiter, it’s a gas giant composed mainly of hydrogen and helium. It has more than 80 moons, with Titan being the largest, which has a thick atmosphere.",
                  "Uranus is an ice giant with a blue-green color due to methane in its atmosphere. It’s unique because it rotates on its side, possibly due to a collision with another object. Uranus has faint rings and 27 known moons.",
                  "Neptune is the most distant planet from the Sun and is known for its deep blue color. It’s also an ice giant and has strong winds and storms. Its largest moon, Triton, has geysers that eject nitrogen gas.",
                  "The Sun is a medium-sized star at the center of our solar system. It’s composed mainly of hydrogen and helium, undergoing nuclear fusion to produce energy that provides heat and light to the planets. The Sun’s gravity holds the solar system together."];
let planetsAge = ["88 Earth days", "225 Earth days", "365.25 days (1 Earth year)", "687 Earth days", "12 Earth years", "29 Earth years", " 84 Earth years", "165 Earth years" , "4.6 billion years"];
let planetsType = ["Terrestrial", "Terrestrial", "Terrestrial", "Terrestrial", "Gas Giant", "Gas Giant", "Ice Giant", "Ice Giant" , "G-type Main-Sequence Star (G2V)"];
let planetsRad = ["2,439.7 km", "6,051.8 km", "6,371 km", "3,389.5 km", "69,911 km", "58,232 km", "25,362 km", "24,622 km" , "696,340 km"];
let planetsTemp = ["430°C (800°F)", "465°C (867°F)", "Average ~15°C (59°F)", "-60°C (-80°F)", "-145°C (-234°F)", " -178°C (-288°F)", "-224°C (-371°F)", "-214°C (-353°F)" , "Surface: ~5,500°C (9,932°F), Core: ~15 million°C (27 million°F)"];
                  let planet = document.getElementById("planet");
let mainContent = document.getElementById("mainContent");
let main = document.getElementById("main");
let shad = document.getElementById("shad");
let med = document.getElementById("med");
let planetName = document.getElementById("planetName");
let planetDis = document.getElementById("planetDes");
let planetAge = document.getElementById("planetAge");
let planetType = document.getElementById("planetType");
let planetRad = document.getElementById("planetRad");
let planetTemp = document.getElementById("planetTemp");
let type = document.getElementById("type");
let index = document.getElementById("index");
let next = document.getElementById("next")
let prev = document.getElementById("prev")

let cntr = 0;
planet.src = "../images/sun.png";

function nextPlanet(){

   cntr = (cntr + 1) % imgs.length;
   mid.style.opacity="0";
   planetDis.style.left="-330px";
   planetAge.style.top="40px";
   planetType.style.top="40px";
   planetRad.style.top="40px";
   planetTemp.style.top="40px";
   setTimeout(
      function(){
      if(cntr != 8){
         shad.style.width="100%";
         shad.style.height="100%";
         main.style.backgroundImage="url('../images/galaxy_1.jpeg')";
         planet.setAttribute("width","500px");
         type.innerHTML = "Planet type"
      }
      else{
         shad.style.width="75%"
         shad.style.height="75%"
         main.style.backgroundImage="url('../images/main-bg-1.jpg')";
         type.innerHTML = "star type"
      }
      planetName.innerHTML = planetsName[cntr];
      planet.src = imgs[cntr];
      shad.style.boxShadow = `0 0 50px 5px ${shads[cntr]}`
      mid.style.opacity="1"
      planetDis.innerHTML=planetsDes[cntr];
      planetAge.innerHTML = planetsAge[cntr];
      planetType.innerHTML = planetsType[cntr];
      planetRad.innerHTML = planetsRad[cntr];
      planetTemp.innerHTML = planetsTemp[cntr];
      planetDis.innerHTML=planetsDes[cntr];
      planetDis.style.left="0px";
      planetAge.style.top="0px";
      planetType.style.top="0px";
      planetRad.style.top="0px";
      planetTemp.style.top="0px";
      cntr = cntr==8 ? 0 : cntr;
      next.src = imgs[(cntr+1 % imgs.length)];
      cntr= cntr==0 ? 8 : cntr;
      prev.src = imgs[cntr];
   }
   ,500);
   index.innerHTML=(cntr+1)+"/9";
   console.log("after next " +cntr)

}


function prevPlanet(){

   cntr = cntr==0 ? 8 : cntr;
   mid.style.opacity="0";
   planetDis.style.left="-330px";
   planetAge.style.top="40px";
   planetType.style.top="40px";
   planetRad.style.top="40px";
   planetTemp.style.top="40px";
   setTimeout(
      function(){
      if(cntr != 8){
         shad.style.width="100%";
         shad.style.height="100%";
         main.style.backgroundImage="url('../images/galaxy_1.jpeg')";
         planet.setAttribute("width","500px");
         type.innerHTML = "Planet type"
      }
      else{
         shad.style.width="75%"
         shad.style.height="75%"
         main.style.backgroundImage="url('../images/main-bg-1.jpg')";
         type.innerHTML = "star type"
      }
      planetName.innerHTML = planetsName[cntr];
      planet.src = imgs[cntr];
      shad.style.boxShadow = `0 0 50px 5px ${shads[cntr]}`
      mid.style.opacity="1"
      planetDis.innerHTML=planetsDes[cntr];
      planetAge.innerHTML = planetsAge[cntr];
      planetType.innerHTML = planetsType[cntr];
      planetRad.innerHTML = planetsRad[cntr];
      planetTemp.innerHTML = planetsTemp[cntr];
      planetDis.innerHTML=planetsDes[cntr];
      planetDis.style.left="0px";
      planetAge.style.top="0px";
      planetType.style.top="0px";
      planetRad.style.top="0px";
      planetTemp.style.top="0px";
      cntr= cntr==0 ? 8 : cntr;
      prev.src = imgs[cntr];
      next.src = imgs[(cntr+1 % imgs.length)];
   }
   ,500);
   index.innerHTML=(cntr+1)+"/9";
   cntr-=1;
   console.log("after prev " +cntr)
}

   window.setInterval(nextPlanet,4000);