import { getUser, deleteUser } from './db.js';

//handles click event for nav dropdown
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (event) {
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

// handles dropdown for Topics
document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const forumPostForm = document.getElementById('forum-post-form');
    forumPostForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        console.log('Title:', title);
        console.log('Content:', content);
        // Here you would normally handle the data, e.g., send it to a server
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
