const db = new PouchDB('ustudy_db');

//function saves the username used in login
export function saveUser(username) {
    var user = {
        _id: 'user_info',
        username: username
    };
    // if user doesn't exist it creates it in db or updates an existing one
    db.put(user, {force: true}).then(function () {
        console.log("User saved successfully!");
    }).catch(function (err) {
        console.error("Error saving user:", err);
    });
}

//getter for the username used in login
export function getUser() {
    return db.get('user_info');
}

export function deleteUser() {
    db.get('user_info').then(function (doc) {
        return db.remove(doc);
    }).then(function () {
        console.log("User deleted successfully!");
    }).catch(function (err) {
        console.error("Error deleting user:", err);
    });
}


let tasks = [];

export function addTask(task) {
    return new Promise((resolve, reject) => {
        task.id = tasks.length + 1;
        tasks.push(task);
        resolve(task);
    });
}

export function getTasks() {
    return new Promise((resolve, reject) => {
        resolve(tasks);
    });
}

export function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
        tasks = tasks.filter(task => task.id !== taskId);
        resolve();
    });
}
