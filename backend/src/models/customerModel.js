/*
    nombre, apellido. correo, isVerified
*/

import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: {
        type : String,
        require : true
    },
    lastname : {
        type : String
    },
    email :  {
        type : String,
        require : true
    },
    password :  {
        type : String,
        require : true
    },
    isVerified : {
        type : Boolean,
        require : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Customer", customerSchema)