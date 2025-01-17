// Get the modal
var modal = document.getElementById("myModal");

// Get the photo that opens the modal
var photo = document.getElementById("photo");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the photo, open the modal
photo.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
