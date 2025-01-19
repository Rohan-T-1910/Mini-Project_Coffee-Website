document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'http://127.0.0.1:5500/My-first-project/order_Now.html';
    } else {
        alert('Invalid credentials');
    }
}
  );