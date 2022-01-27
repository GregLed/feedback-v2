import asyncHandler from "express-async-handler";
import Review from "../models/review.js";

// @desc    Fetch all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: 1 });

  res.json(reviews);
});

// @desc    add a new review
// @route   POST /api/reviews
// @access  Public
const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  if (rating === undefined) {
    res.status(400);
    throw new Error("Missing rating data");
  }

  const review = await Review.create({
    rating,
    comment,
  });

  if (review) {
    res.status(201).json(review);
  } else {
    res.status(400);
    throw new Error("Invalid review data");
  }
});

export { addReview, getReviews };
