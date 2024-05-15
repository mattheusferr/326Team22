
//LOGIN PAGE
const express = require('express');
const PouchDB = require('pouchdb-node');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new PouchDB('ustudy_db');

app.use(bodyParser.json());
app.use(cors());

app.post('/saveUser', async (req, res) => {
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    const user = {
        _id: 'user_info',
        username: username
    };

    try {
        await db.put(user);
        res.status(200).json({ message: 'User saved successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Error saving user', details: err });
    }
});

app.get('/getUser', async (req, res) => {
    try {
        const user = await db.get('user_info');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving user', details: err });
    }
});

app.delete('/deleteUser', async (req, res) => {
    try {
        const user = await db.get('user_info');
        await db.remove(user);
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting user', details: err });
    }
});



// Endpoint to add a task
app.post('/tasks', async (req, res) => {
    const { title, time } = req.body;
    if (!title || !time) {
        return res.status(400).json({ error: 'Both title and time are required' });
    }

    const task = {
        _id: new Date().toISOString(),
        title,
        time
    };

    try {
        await db.put(task);
        res.status(201).json({ message: 'Task added successfully', task });
    } catch (error) {
        res.status(500).json({ error: 'Error adding task', details: error });
    }
});

// Endpoint to get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await db.allDocs({ include_docs: true });
        const tasks = result.rows.map(row => row.doc).filter(doc => doc.title && doc.time);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving tasks', details: error });
    }
});

// Endpoint to delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await db.get(req.params.id);
        await db.remove(task);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task', details: error });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

