import { saveUser } from './db.js';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');
    
    if (username === '' || password === '') {
        loginError.textContent = 'Both fields are required!';
        loginError.style.display = 'block';
    } else { 
        saveUser(username)
            .then(() => {
                loginError.style.display = 'none';
                console.log('Logging in with:', username, password);
                alert('Login successful! Welcome, ' + username);
                window.location.href = '/home.html';
            })
            .catch(err => {
                loginError.textContent = 'Error saving user: ' + err;
                loginError.style.display = 'block';
            });
    }
});
