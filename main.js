let overEl = null;

const thumbEl = document.querySelector( ".thumb-over" );

const filenames = [ "bog.png", "gpe.png", "onewhale.png", "readingrainbow.png", "dtc.png" ];
filenames.forEach( filename => { // preload images
    const img = new Image();
    img.src = filename;
} );

window.addEventListener( "mousemove", e => {
    if ( !overEl ) return;
    thumbEl.style.top = e.clientY + "px";
    thumbEl.style.left = e.clientX + "px";
} );

document.querySelectorAll( ".project-link a" ).forEach( el => {
    el.addEventListener( "mouseenter", e => {
        overEl = e.currentTarget;
        document.body.className = "has-thumb " + e.currentTarget.className;
    } );
    el.addEventListener( "mouseleave", e => {
        if ( overEl === e.currentTarget ) overEl = null;
        document.body.className = "";
    } );
} );

// Get the text element
const movableText = document.getElementById('movableText');

// Add touch event listeners to the document
document.addEventListener('touchmove', (event) => {
  // Prevent default touch behavior (e.g., scrolling)
  event.preventDefault();
  
  // Get the touch position relative to the viewport
  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;
  
  // Calculate the new position of the text
  const newX = touchX - movableText.offsetWidth / 2;
  const newY = touchY - movableText.offsetHeight / 2;
  
  // Set the text position
  movableText.style.left = newX + 'px';
  movableText.style.top = newY + 'px';
});