import express from "express"

import reviewController from "../controllers/reviewController.js";


const router = express.Router();

router.route("/")
.get(reviewController.getReviews)
.post(reviewController.createReview)

router.route("/:id")
.put(reviewController.updateReview)
.delete(reviewController.deleteReview)

export default router;