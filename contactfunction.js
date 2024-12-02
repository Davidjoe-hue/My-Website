// Get the modal
var modal = document.getElementById("confirmationModal");

// Get the submit button
var submitBtn = document.getElementById("submitBtn");

// Get the close button in the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get the confirm and cancel buttons inside the modal
var confirmSubmit = document.getElementById("confirmSubmit");
var cancelSubmit = document.getElementById("cancelSubmit");

// When the user clicks on the submit button, open the confirmation modal
submitBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks "Yes, Submit", submit the form
confirmSubmit.onclick = function() {
    document.getElementById("contactForm").submit();
}

// When the user clicks "Cancel", close the modal
cancelSubmit.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
