function isValidUsername(username) {
    const regex = /^[a-zA-Z0-9]{3,20}$/;
    return regex.test(username);
    }
    function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }
    function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/;
    return regex.test(password);
    }
    function isMatchingPasswords(password, confirmPassword) {
    return password === confirmPassword;
    }
    function isValidPhone(phone) {
    const regex = /^\+91\s\d{10}$/;
    return regex.test(phone);
    }
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const phone = form.phone.value;
    if (!isValidUsername(username)) {
    alert('Username must contain only alphanumeric characters (letters and numbers) and be
    between 3 and 20 characters long.');
    return;
    }
    if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
    }
    if (!isValidPassword(password)) {
    alert('Password should be at least 8 characters long, containing at least one uppercase
    letter, one lowercase letter, one number, and one special character.');
    return;
    }
    if (!isMatchingPasswords(password, confirmPassword)) {
    alert('Passwords do not match.');
    return;
    }
    if (!isValidPhone(phone)) {
    alert('Please enter a valid phone number in the format +91 1234567890.');
    return;
    }
    alert('Registration successful!');
    form.reset();
    });
    });