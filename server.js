import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobs.js';
import applicationRoutes from './routes/applications.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
let CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Remove trailing slash from CORS_ORIGIN if present
if (CORS_ORIGIN && CORS_ORIGIN.endsWith('/')) {
  CORS_ORIGIN = CORS_ORIGIN.slice(0, -1);
}

// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    // Remove trailing slash from origin for comparison
    const normalizedOrigin = origin.endsWith('/') ? origin.slice(0, -1) : origin;
    const normalizedCors = CORS_ORIGIN.endsWith('/') ? CORS_ORIGIN.slice(0, -1) : CORS_ORIGIN;
    
    if (normalizedCors === '*' || normalizedCors === normalizedOrigin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('QuickHire API is running');
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/quickhire';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
