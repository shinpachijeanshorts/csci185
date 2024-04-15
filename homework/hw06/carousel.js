const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;



/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image:', idx);
    //target .current-image change image src to photos[idx]
    //target caption text
    const img = document.querySelector("#current");
    img.src = photos[idx];
    document.getElementById("caption").innerHTML = `<p>Image ${[idx + 1]} of 10.</p>`;
}




/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    if (idx < photos.length - 1) {
        idx += 1;
        showImage();
    }

    else {
        console.log("Counter was reset");
        idx = 0;
        showImage();
    }
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
   idx -= 1;
   showImage();
   if (idx < 0) {
    console.log("Counter was reset");
    idx = 9;
    showImage();
   }
}





