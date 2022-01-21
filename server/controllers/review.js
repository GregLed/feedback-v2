import asyncHandler from 'express-async-handler';
import Review from '../models/review.js';

// @desc    add a new review
// @route   POST /api/reviews
// @access  Public
const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  console.log(rating, comment);

  if (rating === undefined) {
    res.status(400);
    throw new Error('Missing rating data');
  }

  const review = await Review.create({
    rating,
    comment,
  });

  if (review) {
    res.status(201).json({
      _id: review._id,
      rating: review.rating,
      comment: review.comment,
    });
  } else {
    res.status(400);
    throw new Error('Invalid review data');
  }
});

export { addReview };
