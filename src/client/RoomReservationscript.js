import { addTask, getTasks, deleteTask } from './db.js';

document.addEventListener('DOMContentLoaded', function () {
    const scheduleElement = document.getElementById('schedule');

    // Function to render the schedule
    function renderSchedule() {
        scheduleElement.innerHTML = '';

        getTasks().then(tasks => {
            tasks.forEach((task, index) => {
                const div = document.createElement('div');
                div.classList.add('task');

                const taskDetails = document.createElement('span');
                taskDetails.classList.add('task-details');
                taskDetails.textContent = `Task: ${task.title} - Time: ${task.time}`;

                const removeButton = document.createElement('span');
                removeButton.classList.add('remove-btn');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeTask(task.id);

                div.appendChild(taskDetails);
                div.appendChild(removeButton);
                scheduleElement.appendChild(div);
            });
        }).catch(error => {
            console.error('Error getting tasks:', error);
        });
    }

    // Function to remove a task
    function removeTask(taskId) {
        deleteTask(taskId).then(() => {
            renderSchedule();
        }).catch(error => {
            console.error('Error deleting task:', error);
        });
    }

    // Event listener to add a task
    const addTaskButton = document.getElementById('add-task-btn');
    addTaskButton.addEventListener('click', function () {
        const title = prompt('Enter task name:');
        const time = prompt('Enter task time (e.g., 9:00 AM - 10:00 AM):');
        if (title && time) {
            addTask({ title: title, time: time }).then(() => {
                renderSchedule();
            }).catch(error => {
                console.error('Error adding task:', error);
            });
        }
    });

    // Initial rendering of the schedule
    renderSchedule();
});




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







/*import { getUser } from './db.js';

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

document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById('grid-container');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  daysOfWeek.forEach(day => {
    const dayHeader = document.createElement('div');
    dayHeader.textContent = day;
    dayHeader.classList.add('grid-item', 'day-header');
    gridContainer.appendChild(dayHeader);
  });

  for (let i = 0; i < 10 * 7; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }
});


*/


  

    