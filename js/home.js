 // Function to check if a section is in the viewport
 function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (
    rect.top <= windowHeight && rect.bottom >= 0
  );
}

// Function to check visibility for all sections
function checkVisibility() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    if (isSectionVisible(section)) {
      section.classList.add('visible'); // Add the class to make the section visible
    }
  });
}

// Listen for scroll and load events
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Run when the page is loaded