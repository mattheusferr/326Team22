
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
