// add a function to iterate through the colors using for loop
function hoverOverImages() {
    let paintImages = document.querySelector('img');
    // console.log('meow');

    for (let i=0; i < paintImages.length; i++){
        document.querySelector(paintImages[i].id).addEventListener('mouseOver', functionPlaceHolder)
        document.querySelector(paintImages[i].id).addEventListener('mouseOut', functionPlaceHolder)
    }
}
// add function to display color name while mouseOver over img using inner.HTML

// add function to display price of paint color on mouseOver

// add function to change opacity of background to .5 of origional color


