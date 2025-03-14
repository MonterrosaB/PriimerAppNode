const reviewController = {};

import reviewModel from "../models/reviewModel.js";

//select

reviewController.getReviews = async (req, res) => {
    const reviews = await reviewModel.find().populate("idCustomer")
    res.json(reviews)
}

//INSERT

reviewController.createReview = async (req, res) => {
    const {comment, rating, idCustomer} = req.body;
    
    const newReview = new reviewModel({comment, rating, idCustomer});
    await newReview.save()
    res.json({message : "review saved"})
}

//DELETE

reviewController.deleteReview = async (req, res) => {
    await reviewModel.findOneAndDelete(req.params.id)
    res.json({message : "review delete"})
}

//UPDATE
reviewController.updateReview = async (req, res) => {
    const {comment, rating, idCustomer} = req.body;

    await reviewModel.findByIdAndUpdate(req.params.id, {
            comment,
            rating,
            idCustomer
        },{new : true}
    );
    res.json({ message : "review updated"})
}

export default reviewController;