import { getUser, deleteUser } from './db.js';

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Get username used in login to use for student name on top right of page.
    getUser().then((user) => {
        if (user) {
            document.querySelector('.user-item').textContent = user.username;
        } else {
            console.log('No user found');
        }
    }).catch((err) => {
        console.error('Error retrieving user:', err);
    });

    // Display upcoming study times on Home page
    async function displayUpcomingStudyTimes() {
        try {
            const response = await fetch('/api/study-times');
            const studyTimes = await response.json();
            const upcomingStudyTimesContainer = document.getElementById('upcomingStudyTimes');
            upcomingStudyTimesContainer.innerHTML = '';
            studyTimes.forEach(st => {
                const studyTimeElement = document.createElement('div');
                studyTimeElement.textContent = `${st.className}: ${st.date} at ${st.time}`;
                upcomingStudyTimesContainer.appendChild(studyTimeElement);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    displayUpcomingStudyTimes();
});

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
