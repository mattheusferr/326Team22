import { getUser, deleteUser } from './db.js';

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function(event) {
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    getUser().then((user) => {
        if (user) {
            document.querySelector('.user-item').textContent = user.username;
        } else {
            console.log('No user found');
        }
    }).catch((err) => {
        console.error('Error retrieving user:', err);
    });

    async function displayUpcomingStudyTimes() {
        try {
            const response = await fetch('/api/study-times');
            const studyTimes = await response.json();
            const upcomingStudyTimesContainer = document.getElementById('upcomingStudyTimes');
            upcomingStudyTimesContainer.innerHTML = '';
            studyTimes.forEach(st => {
                const studyTimeElement = document.createElement('div');
                studyTimeElement.textContent = `${st.className}: ${st.date} at ${st.time}`;
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => {
                    // Show edit form with current values
                    const editForm = document.createElement('form');
                    editForm.innerHTML = `
                        <input type="text" id="editClass" value="${st.className}" required>
                        <input type="date" id="editDate" value="${st.date}" required>
                        <input type="time" id="editTime" value="${st.time}" required>
                        <button type="submit">Save</button>
                    `;
                    editForm.addEventListener('submit', async function(event) {
                        event.preventDefault();
                        const className = document.getElementById('editClass').value;
                        const date = document.getElementById('editDate').value;
                        const time = document.getElementById('editTime').value;
                        await editStudyTime(st.id, { className, date, time });
                        displayUpcomingStudyTimes();
                    });
                    studyTimeElement.appendChild(editForm);
                });
                studyTimeElement.appendChild(editButton);
                upcomingStudyTimesContainer.appendChild(studyTimeElement);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function editStudyTime(id, updatedData) {
        try {
            const response = await fetch(`/api/study-times/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Update successful');
            } else {
                alert('Update failed: ' + result.message);
            }
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
