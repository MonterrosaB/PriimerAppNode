/*
    nombre, apellido. correo, isVerified
*/

import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    lastname : {
        type : String
    },
    email :  {
        type : String,
        required : true
    },
    password :  {
        type : String,
        required : true
    },
    isVerified : {
        type : Boolean,
        required : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Customer", customerSchema)