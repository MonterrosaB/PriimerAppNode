/*
    nombre, apellido. correo, isVerified
*/

import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
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
    rol :  {
        type : String,
        required : true
    },
    password :  {
        type : String,
        required : true
    },
    isActive : {
        type : Boolean,
        required : true
    }
},
{
    timestamps : true,
    strict : false
}); 

export default model ("Employee", employeeSchema)