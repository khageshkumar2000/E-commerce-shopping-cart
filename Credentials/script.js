// Login Form Validation and Submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter username and password.');
    return;
  }

  // Simulate form submission (you can replace this with an actual AJAX request)
  alert(`Logged in with Username: ${username} and Password: ${password}`);
  loginForm.reset(); // Reset the form after submission
});

// Signup Form Validation and Submission
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (fullname.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('Please enter full name, email, and password.');
    return;
  }

  // Simulate form submission (you can replace this with an actual AJAX request)
  alert(`Signed up with Full Name: ${fullname}, Email: ${email}, and Password: ${password}`);
  signupForm.reset(); // Reset the form after submission
});
$('.carousel').carousel({
    interval: 1000 // Change the interval as needed (here it's set to 2 seconds)
  });

// Forgot Password Form Submission
const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const email = document.getElementById('email').value;

  // Basic validation
  if (email.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  // Simulate form submission (you can replace this with an actual AJAX request)
  alert(`A password reset link has been sent to ${email}`);
  forgotPasswordForm.reset(); // Reset the form after submission
});
