import dotenv from 'dotenv';
import colors from 'colors';
import express from 'express';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandlers.js';
import reviewRoutes from './routes/review.js';

dotenv.config();

connectDB();

const app = express();

// Add middleware to parse JSON
app.use(express.json());

app.use('/api/reviews', reviewRoutes);

// Add middlewares for error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
