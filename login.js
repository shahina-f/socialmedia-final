$(document).ready(function () {
    $('#login-form').submit(function (e) {
      e.preventDefault(); // Prevent page reload
      const username = $('#username').val().trim();
      const password = $('#password').val().trim();
  
      if (username === '' || password === '') {
        alert('Please fill out all fields.');
        return;
      }
  
      // Simulate login action
      if (username === 'user' && password === 'password') {
        alert('Login successful!');
        // Redirect to home page (example: index.html)
        window.location.href = 'home.html';
      } else {
        alert('Invalid username or password. Try again.');
      }
    });
  });
  $(document).ready(function(){
    $('logbtn').click(function(){
      window.location.href='home.html';
    });
  });