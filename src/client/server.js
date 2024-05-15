import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

let studyTimes = [];

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the directory to serve static files from
const staticDir = path.join(__dirname, 'src', 'client');

// Middleware to serve static files
app.use(express.static(staticDir));

// Route for the root URL to serve login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(staticDir, 'login.html'));
});

// Endpoint to handle tutoring reservation (POST)
app.post('/api/reserve', (req, res) => {
    const { className, date, time } = req.body;
    if (!className || !date || !time) {
        return res.status(400).json({ message: 'Class, date, and time are required' });
    }
    const studyTime = { id: Date.now(), className, date, time };
    studyTimes.push(studyTime);
    res.json({ message: 'Reservation successful', studyTime });
});

// Endpoint to get all study times (GET)
app.get('/api/study-times', (req, res) => {
    res.json(studyTimes);
});

// Endpoint to delete a specific study time (DELETE)
app.delete('/api/study-times/:id', (req, res) => {
    const { id } = req.params;
    studyTimes = studyTimes.filter(st => st.id !== parseInt(id));
    res.json({ message: 'Deletion successful' });
});

// Endpoint to update a specific study time (PUT)
app.put('/api/study-times/:id', (req, res) => {
    const { id } = req.params;
    const { className, date, time } = req.body;
    if (!className || !date || !time) {
        return res.status(400).json({ message: 'Class, date, and time are required' });
    }
    const studyTimeIndex = studyTimes.findIndex(st => st.id === parseInt(id));
    if (studyTimeIndex === -1) {
        return res.status(404).json({ message: 'Reservation not found' });
    }
    studyTimes[studyTimeIndex] = { id: parseInt(id), className, date, time };
    res.json({ message: 'Update successful', studyTime: studyTimes[studyTimeIndex] });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
