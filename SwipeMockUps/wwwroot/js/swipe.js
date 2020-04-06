// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function dragstart_handler(ev) {
    // Create an image and then use it for the drag image.
    // NOTE: change "example.gif" to a real image URL or the image 
    // will not be created and the default drag image will be used.
    
    let img = new Image();
    img.src = 'h2.jpg';
    ev.dataTransfer.setDragImage(img, 10, 10);
    
}