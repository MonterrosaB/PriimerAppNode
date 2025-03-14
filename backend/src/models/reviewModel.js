/*
    comment
    rating
    idcostumer
*/

import { Schema, model } from "mongoose";

const reviewtSchema = new Schema({
    comment: {
        type : String,
        require : true
    },
    rating : {
        type : Number,
        require : true,
        max : 5
    },
    idCustomer :  {
        type : Schema.Types.ObjectId,
        ref : "customers",
        require : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model("Review", reviewtSchema)