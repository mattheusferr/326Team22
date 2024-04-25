import { getUser } from './db.js';

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
/*
document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const daysOfWeek = [ "Timings","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const numberOfRows = 10;

  for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < 8; j++) { 
      const cell = document.createElement("div");
      cell.classList.add("grid-item");
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }
});
*/

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




  

    /*
    for (let i = 0; i < 12; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
  
      daysOfWeek.forEach(day => {
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        if (i === 0) {
          cell.textContent = day;
          cell.classList.add("day-of-week");
        } else {
          cell.textContent = (i - 1) * 7 + daysOfWeek.indexOf(day) + 1;
        }
        row.appendChild(cell);
      });
  
      grid.appendChild(row);
    } */
  
  