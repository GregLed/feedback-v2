import express from 'express';
import { addReview } from '../controllers/review.js';

const router = express.Router();
router.route('/').post(addReview);

export default router;
