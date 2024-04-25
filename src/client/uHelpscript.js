import { getUser, deleteUser} from './db.js';

//handles click event for nav dropdown
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    //gets username used in login to use for student name on top right of page.
    getUser().then((user) => {
        document.querySelector('.user-item').textContent = user.username;
    }).catch((err) => {
        console.error('Error retrieving user:', err);
    });
});

//deletes current username from db when logged out
document.addEventListener('DOMContentLoaded', function() {
    var logoutLink = document.querySelector('.logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();  
            deleteUser();
            alert("You have been logged out.");
            window.location.href = '/login.html';  
        });
    }
});