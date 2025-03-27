/*
    Campos: nombre, descripcion, precio, stock
*/

import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    price :  {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : true,
        min : 0
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Product", productSchema)