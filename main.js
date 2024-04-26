let overEl = null;

const thumbEl = document.querySelector(".thumb-over");

const filenames = ["bog.png", "gpe.png", "onewhale.png", "readingrainbow.png", "dtc.png"];
filenames.forEach(filename => { // preload images
    const img = new Image();
    img.src = filename;
});


window.addEventListener("mousemove", e => {
    if (!overEl) return;
    thumbEl.style.top = e.clientY + "px";
    thumbEl.style.left = e.clientX + "px";
});

// Touch Event Listeners for Scattering Letters
document.querySelectorAll(".project-link a").forEach(el => {
    el.addEventListener("touchstart", e => {
        scatterLetters();
    });
});

// Function to scatter letters
function scatterLetters() {
    const header = document.getElementById('header'); // Define header here
    const projectLinks = document.querySelectorAll('.project-link'); // Define project links here

    if (window.innerWidth <= 600) { // Adjust the width as needed
        header.classList.add('scattered');
        projectLinks.forEach(link => {
            link.classList.add('scattered');
        });
    }
}


document.querySelectorAll(".project-link a").forEach(el => {
    el.addEventListener("mouseenter", e => {
        overEl = e.currentTarget;
        document.body.className = "has-thumb " + e.currentTarget.className;
    });
    el.addEventListener("mouseleave", e => {
        if (overEl === e.currentTarget) overEl = null;
        document.body.className = "";
    });
});

// Get the header and project link elements
const header = document.getElementById('header');
const projectLink = document.getElementById('project-link');

// Function to scatter letters only on small screens
function scatterLetters() {
    if (window.innerWidth <= 600) { // Adjust the width as needed
        header.classList.add('scattered');
        projectLink.classList.add('scattered');
    }
  }
  
// Function to return letters to normal position only on small screens
function returnLettersToNormal() {
    const header = document.getElementById('header'); // Define header here
    const projectLinks = document.querySelectorAll('.project-link'); // Define project links here

    if (window.innerWidth <= 600) { // Adjust the width as needed
        header.classList.remove('scattered');
        projectLinks.forEach(link => {
            link.classList.remove('scattered');
        });
    }
}
  
// Event listener for scroll
window.addEventListener('scroll', () => {
    // Check scroll position
    if (window.scrollY > 100) {
        // If scrolled down, scatter letters only on small screens
        scatterLetters();
    } else {
        // If scrolled back to top, return letters to normal only on small screens
        returnLettersToNormal();
    }
});