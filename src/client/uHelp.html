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

    // Handle form visibility
    document.getElementById('scheduleButton').addEventListener('click', function() {
        document.getElementById('reservationForm').style.display = 'block';
    });

    // Handle form submission for reservation
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const className = document.getElementById('class').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            if (className && date && time) {
                try {
                    const response = await fetch('/api/reserve', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ className, date, time }),
                    });
                    const result = await response.json();
                    if (response.ok) {
                        alert('Reservation successful');
                        displayStudyTimes();
                    } else {
                        alert('Reservation failed: ' + result.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                alert('Please enter class, date, and time');
            }
        });
    }

    // Display study times
    async function displayStudyTimes() {
        try {
            const response = await fetch('/api/study-times');
            const studyTimes = await response.json();
            const studyTimesContainer = document.getElementById('studyTimes');
            studyTimesContainer.innerHTML = '';
            studyTimes.forEach(st => {
                const studyTimeElement = document.createElement('div');
                studyTimeElement.textContent = `${st.className}: ${st.date} at ${st.time}`;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', async () => {
                    console.log('Delete button clicked for ID:', st.id); // Log delete button click
                    await deleteStudyTime(st.id);
                    displayStudyTimes();
                });
                studyTimeElement.appendChild(deleteButton);
                studyTimesContainer.appendChild(studyTimeElement);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function deleteStudyTime(id) {
        try {
            console.log('Sending delete request for ID:', id); // Log delete request
            const response = await fetch(`/api/study-times/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                console.error('Delete request failed:', response.statusText); // Log response error
            }
            const result = await response.json();
            console.log('Delete response:', result); // Log server response
            if (response.ok) {
                alert('Deletion successful');
            } else {
                alert('Deletion failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    displayStudyTimes();
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
