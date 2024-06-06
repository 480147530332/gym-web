function toggleTrainerInfo(element) {
    var info = element.querySelector('.trainer-info');
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
}


// Open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
}

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // You can perform form validation here

    // Example: Check if required fields are not empty
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example: Check if email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Example: Send form data to server
    alert('Form submitted successfully!');
    // You can add code here to send form data to a server using AJAX or any other method
}
