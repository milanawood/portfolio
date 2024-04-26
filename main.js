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

const movableText = document.getElementById('movableText');

//get all the letter elements
const letters = moveableText.querySelectorAll('.letter');

// Function to handle touch move
function handleTouchMove(event) {
  // Prevent default touch behavior (e.g., scrolling)
  event.preventDefault();
  
  //loop through each letter and update its position
  letters.forEach((letter, index) => {
    const letTouchX = event.touches[index].clientX;
    const letTouchY = event.touches[index].clientY;

    //calculate new letter position
    const newX = letTouchX - letter.offsetWidth / 2;
    const newY = letTouchY - letter.offsetHeight / 2;

    //set letter position
    letter.style.left = newX + 'px';
    letter.style.top = newY + 'px';
  })
  // Get the touch position relative to the viewport
  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;
  
  // Calculate the new position of the text
  const newMoveX = touchX - movableText.offsetWidth / 2;
  const newMoveY = touchY - movableText.offsetHeight / 2;
  
  // Set the text position
  movableText.style.left = newMoveX + 'px';
  movableText.style.top = newMoveY + 'px';
}

// Add touch event listeners to the document
document.addEventListener('touchmove', handleTouchMove);

// Function to handle touch end
function handleTouchEnd() {
  // Reset the text position to its original state
  movableText.style.left = '50%';
  movableText.style.top = '50%';
    // Reset the position of each letter to its original state
    letters.forEach((letter) => {
        letter.style.left = 'auto';
        letter.style.top = 'auto';
      });
}

// Add touchend event listener to the document
document.addEventListener('touchend', handleTouchEnd);