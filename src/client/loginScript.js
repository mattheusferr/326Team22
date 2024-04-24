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
        //saves username to local db
        saveUser(username);
        loginError.style.display = 'none';
        console.log('Logging in with:', username, password);
        // Success login:
        alert('Login successful! Welcome, ' + username);
        // Redirect after log in
        window.location.href = '/home.html'; 
    }
});
