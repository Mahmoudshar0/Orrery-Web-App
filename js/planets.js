let imgs = ["../images/mercury.png", "../images/venus.png", "../images/earth.png", "../images/mars.png", "../images/jupiter.png", "../images/saturn.png", "../images/uranus.png", "../images/neptune.png" , "../images/sun.png"];
let shads = ["#d8d8d8", "#d79755", "#d6e6ff", "#EFA463", "#C8C3C0", "#D5BC8B", "#B1E7EA", "#71C3FB" , "#ff8507"];
let planetsName = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune" , "sun"];
let planet = document.getElementById("planet");
let mainContent = document.getElementById("mainContent");
let main = document.getElementById("main");
let shad = document.getElementById("shad");
let med = document.getElementById("med");
let planetName = document.getElementById("planetName");

let cntr = 0;



planet.src = "../images/sun.png";
function p_transition(){
   cntr = (cntr + 1) % imgs.length;
   mid.style.opacity="0";
   // shad.style.opacity="0";
   setTimeout(function(){
      if(cntr != 8){
         shad.style.width="100%";
         shad.style.height="100%";
         main.style.backgroundImage="url('../images/galaxy_1.jpeg')";
         planet.setAttribute("width","500px");
      }
      else{
         shad.style.width="75%"
         shad.style.height="75%"
         main.style.backgroundImage="url('../images/main-bg-1.jpg')";
      }
      planetName.innerHTML = planetsName[cntr];
      planet.src = imgs[cntr];
      shad.style.boxShadow = `0 0 50px 5px ${shads[cntr]}`
      mid.style.opacity="1"
      // shad.style.opacity="1"
   }
   ,500);
   console.log(cntr)
}
