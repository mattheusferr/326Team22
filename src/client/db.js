const db = new PouchDB('ustudy_db');

//function saves the username used in login
export function saveUser(username) {
    const user = {
        _id: 'user_info',
        username: username
    };
    db.get('user_info')
        .then(doc => {
            user._rev = doc._rev;
            return db.put(user);
        })
        .catch(err => {
            if (err.status === 404) {
                return db.put(user);
            } else {
                throw err;
            }
        })
        .then(() => {
            console.log("User saved successfully!");
        })
        .catch(err => {
            console.error("Error saving user:", err);
        });
}

export function getUser() {
    return db.get('user_info')
        .catch(err => {
            if (err.status === 404) {
                return null;
            } else {
                throw err;
            }
        });
}

// Function to delete the user data
export function deleteUser() {
    db.get('user_info')
        .then(doc => {
            return db.remove(doc);
        })
        .then(() => {
            console.log("User deleted successfully!");
        })
        .catch(err => {
            console.error("Error deleting user:", err);
        });
}

// db.js

let tasks = [];

export const getTasks = async () => {
    const response = await fetch('/tasks');
    return response.json();
};

export const addTask = async (task) => {
    const response = await fetch('/tasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`/tasks/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
