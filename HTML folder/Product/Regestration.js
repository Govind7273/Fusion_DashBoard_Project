
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate first name
    var firstName = document.getElementById('firstName').value;
    if (firstName.length < 3) {
        showAlert('First name must have at least 3 characters.');
        return;
    }

    // Validate last name
    var lastName = document.getElementById('lastName').value;
    if (lastName.length < 3) {
        showAlert('Last name must have at least 3 characters.');
        return;
    }

    // Validate email
    var email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        showAlert('Invalid email format.');
        return;
    }

    // Validate phone number
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (!validatePhoneNumber(phoneNumber)) {
        showAlert('Invalid phone number. It must be 10 digits.');
        return;
    }

    // Validate password
    var password = document.getElementById('password').value;
    if (!validatePassword(password)) {
        showAlert('Invalid password format. It must contain at least one digit and one special character.');
        return;
    }

    
    var isRegistrationSuccessful = true;

    if (isRegistrationSuccessful) {
        var successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';

    
        setTimeout(function() {
            window.location.href = 'LoginPage.html';
               
        }, 6000);
    }
});

function validateEmail(email) {
 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {

    var cleanedPhoneNumber = phoneNumber.replace(/\s/g, '');
    return /^\d{10}$/.test(cleanedPhoneNumber);
}

function validatePassword(password) {
 
    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{1,}$/;
    return passwordRegex.test(password);
}

function showAlert(message) {
    alert(message);
}



function generateRandomPassword() {
   
    var randomNumber = Math.floor(Math.random() * 9000) + 1000;


    var firstName = document.getElementById('firstName').value;
 var randomPassword=firstName+randomNumber;

    // Display the random password in an alert
    alert("Random Password: " + randomPassword);
}

