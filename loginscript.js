document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'http://127.0.0.1:3000/practice sheet/Sheet1.html';
    } else {
        alert('Invalid credentials');
    }
}
  );