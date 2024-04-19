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

