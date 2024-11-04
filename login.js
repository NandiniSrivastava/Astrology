document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Redirect to the history page, regardless of username and password
    window.location.href = 'history.html';
});