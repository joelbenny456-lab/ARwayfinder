import express from 'express';
import cors from 'cors';
import placesRouter from './routes/places.js';
import tasksrouter from './routes/tasks.js';
// Project 1: 3D Map


const app = express();
app.use(cors()); 
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/places', placesRouter);

app.use('/api/tasks', tasksrouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`)); 