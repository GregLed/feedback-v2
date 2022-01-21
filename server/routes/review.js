import express from 'express';
import { addReview, getReviews } from '../controllers/review.js';

const router = express.Router();
router.route('/').post(addReview).get(getReviews);

export default router;
