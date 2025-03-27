/*
    comment
    rating
    idcostumer
*/

import { Schema, model } from "mongoose";

const reviewtSchema = new Schema({
    comment: {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true,
        max : 5
    },
    idCustomer :  {
        type : Schema.Types.ObjectId,
        ref : "customers",
        required : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model("Review", reviewtSchema)