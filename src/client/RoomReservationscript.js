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
    const grid = document.getElementById("grid");
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    for (let i = 0; i < 12; i++) {
      const row = document.createElement("div");
      row.classList.add("grid-row");
  
      // Add grid items for each day of the week
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
    }
  });