const db = new PouchDB('ustudy_db');

//function saves the username used in login
export async function saveUser(username) {
    try {
        const response = await fetch('http://localhost:3000/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        console.log("User saved successfully!");
    } catch (err) {
        console.error("Error saving user:", err);
        throw err;
    }
}

export async function getUser() {
    try {
        const response = await fetch('http://localhost:3000/getUser');
        const user = await response.json();
        return user;
    } catch (err) {
        console.error("Error retrieving user:", err);
        throw err;
    }
}
export async function deleteUser() {
    try {
        const response = await fetch('http://localhost:3000/deleteUser', {
            method: 'DELETE'
        });
        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        console.log("User deleted successfully!");
    } catch (err) {
        console.error("Error deleting user:", err);
        throw err;
    }
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