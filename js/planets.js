/** @format */

let imgs = [
  "../images/sun3330.png",
  "../images/mercury.png",
  "../images/venus.png",
  "../images/earth.png",
  "../images/mars.png",
  "../images/jupiter.png",
  "../images/saturn.png",
  "../images/uranus.png",
  "../images/neptune.png",
];
let shads = [
  "#ff8507",
  "#d8d8d8",
  "#d79755",
  "#d6e6ff",
  "#EFA463",
  "#C8C3C0",
  "#D5BC8B",
  "#B1E7EA",
  "#71C3FB",
];
let planetsName = [
  "Sun",
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
let planetsDes = [
  "The Sun is a medium-sized star at the center of our solar system. It’s composed mainly of hydrogen and helium, undergoing nuclear fusion to produce energy that provides heat and light to the planets. The Sun’s gravity holds the solar system together.",
  "Mercury is the smallest planet in our solar system and the closest to the Sun. It has a very thin atmosphere, leading to extreme temperature changes between day and night. Its surface is covered with craters, similar to the Moon.",
  "Venus is similar in size to Earth but has a thick atmosphere made mostly of carbon dioxide. It experiences an intense greenhouse effect, making it the hottest planet in our solar system. Its surface is dotted with volcanoes and is very dry.",
  "Earth is the only planet known to support life. It has a moderate atmosphere that allows liquid water to exist on the surface, creating a stable environment for diverse ecosystems. Earth has a strong magnetic field and one natural satellite, the Moon.",
  'Mars is known as the "Red Planet" because of its iron oxide-rich surface. It has the largest volcano in the solar system, Olympus Mons, and polar ice caps. Though cold and dry now, scientists believe Mars may have had liquid water in the past.',
  "Jupiter is the largest planet in the solar system and is known for its Great Red Spot, a massive storm that has lasted for centuries. It’s a gas giant made mostly of hydrogen and helium and has over 70 moons, including the largest moon, Ganymede.",
  "Saturn is famous for its extensive ring system made of ice and rock particles. Like Jupiter, it’s a gas giant composed mainly of hydrogen and helium. It has more than 80 moons, with Titan being the largest, which has a thick atmosphere.",
  "Uranus is an ice giant with a blue-green color due to methane in its atmosphere. It’s unique because it rotates on its side, possibly due to a collision with another object. Uranus has faint rings and 27 known moons.",
  "Neptune is the most distant planet from the Sun and is known for its deep blue color. It’s also an ice giant and has strong winds and storms. Its largest moon, Triton, has geysers that eject nitrogen gas.",
];
let planetsAge = [
  "4.6 billion years",
  "88 Earth days",
  "225 Earth days",
  "365.25 days (1 Earth year)",
  "687 Earth days",
  "12 Earth years",
  "29 Earth years",
  " 84 Earth years",
  "165 Earth years",
];
let planetsType = [
  "G-type Main-Sequence Star (G2V)",
  "Terrestrial",
  "Terrestrial",
  "Terrestrial",
  "Terrestrial",
  "Gas Giant",
  "Gas Giant",
  "Ice Giant",
  "Ice Giant",
];
let planetsRad = [
  "696,340 km",
  "2,439.7 km",
  "6,051.8 km",
  "6,371 km",
  "3,389.5 km",
  "69,911 km",
  "58,232 km",
  "25,362 km",
  "24,622 km",
];
let planetsTemp = [
  "Surface: ~5,500°C (9,932°F), Core: ~15 million°C (27 million°F)",
  "430°C (800°F)",
  "465°C (867°F)",
  "Average ~15°C (59°F)",
  "-60°C (-80°F)",
  "-145°C (-234°F)",
  " -178°C (-288°F)",
  "-224°C (-371°F)",
  "-214°C (-353°F)",
];
let planet = document.getElementById("planet");
let mainContent = document.getElementById("mainContent");
let main = document.getElementById("main");
let mid = document.getElementById("mid");
let planetName = document.getElementById("planetName");
let planetDis = document.getElementById("planetDes");
let planetAge = document.getElementById("planetAge");
let planetType = document.getElementById("planetType");
let planetRad = document.getElementById("planetRad");
let planetTemp = document.getElementById("planetTemp");
let type = document.getElementById("type");
let index = document.getElementById("index");

let img1 = document.getElementById("planet");
img1.src = "../images/sun3330.png";

var counter = 0;
function changeImg() {
  if (counter == 9) {
    counter = 0;
  }
  img1.src = imgs[counter];
  counter++;
}

// Next image
function nextImg() {
  // Add slide-out animation (move content left and fade out)
  img1.classList.add("fade-in-out");
  planetName.classList.add("slide-in-left");
  planetDis.classList.add("slide-in-left");
  planetAge.classList.add("slide-in-left");
  planetType.classList.add("slide-in-left");
  planetRad.classList.add("slide-in-left");
  planetTemp.classList.add("slide-in-left");
  index.classList.add("slide-in-left");

  // Wait for the slide-out animation (500ms) before updating content
  setTimeout(() => {
    // Increment counter and reset if it reaches the end
    counter++;
    if (counter == 9) {
      counter = 0;
    }

    if (counter == 0) {
      type.innerHTML = "Star Type";
    } else {
      type.innerHTML = "Planet Type";
    }

    // Update the image source and text content
    img1.src = imgs[counter];
    planetName.innerHTML = planetsName[counter];
    planetDis.innerHTML = planetsDes[counter];
    planetAge.innerHTML = planetsAge[counter];
    planetType.innerHTML = planetsType[counter];
    planetRad.innerHTML = planetsRad[counter];
    planetTemp.innerHTML = planetsTemp[counter];
    index.innerHTML = `${counter + 1}/9`;

    // Remove the slide-out class and add the slide-in class to animate the new content coming in from the left
    img1.classList.remove("fade-in-out");
    planetName.classList.remove("slide-in-left");
    planetDis.classList.remove("slide-in-left");
    planetAge.classList.remove("slide-in-left");
    planetType.classList.remove("slide-in-left");
    planetRad.classList.remove("slide-in-left");
    planetTemp.classList.remove("slide-in-left");
    index.classList.remove("slide-in-left");

    img1.classList.add("fade-in");

    //   img1.classList.add('slide-in');
    planetName.classList.add("slide-in");
    planetDis.classList.add("slide-in");
    planetAge.classList.add("slide-in");
    planetType.classList.add("slide-in");
    planetRad.classList.add("slide-in");
    planetTemp.classList.add("slide-in");
    index.classList.add("slide-in");

    // Remove slide-in class after the animation completes (500ms)
    setTimeout(() => {
      img1.classList.remove("fade-in");
      planetName.classList.remove("slide-in");
      planetDis.classList.remove("slide-in");
      planetAge.classList.remove("slide-in");
      planetType.classList.remove("slide-in");
      planetRad.classList.remove("slide-in");
      planetTemp.classList.remove("slide-in");
      index.classList.remove("slide-in");
    }, 500); // Wait for the slide-in animation to finish
  }, 500); // Wait for the slide-out animation to complete
}

let intervalTime = 3500;
let intervalId;

function startCycle() {
  intervalId = setInterval(nextImg, intervalTime);
}

// Stop automatic cycling
function stopCycle() {
  clearInterval(intervalId);
}

// Start the image cycling
startCycle();
// Add event listeners for hover on the image
img1.addEventListener("mouseover", stopCycle); // Stop cycling when hovering
img1.addEventListener("mouseout", startCycle); // Resume cycling when no longer hovering

// Prev image
function prevImg() {
  counter--;
  if (counter < 0) {
    counter = 8;
  }

  if (counter == 0) {
    type.innerHTML = "Star Type";
  } else {
    type.innerHTML = "Planet Type";
  }

  img1.src = imgs[counter];
  planetName.innerHTML = planetsName[counter];
  planetDis.innerHTML = planetsDes[counter];
  planetAge.innerHTML = planetsAge[counter];
  planetType.innerHTML = planetsType[counter];
  planetRad.innerHTML = planetsRad[counter];
  planetTemp.innerHTML = planetsTemp[counter];
  index.innerHTML = `${counter + 1}/9`;
}
