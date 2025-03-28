import customerModel from "../models/customerModel.js";
import employeeModel from "../models/employeeModel.js";

import bcrypt from "bcryptjs";
import jsonweb from "jsonwebtoken";
import {config} from "../config.js"

const loginController = {};

loginController.login = async(req, res) =>{
    const {
        email,
        password
    } = req.body;

    try {
        //validamos los niveles (Empleado, Cliente, Admin)
        let userFound;
        let userType;
        
        //Admin
        if(email === config.ADMIN.EMAIL && password === config.ADMIN.PASSWORD){
            userType = "admin";
            userFound = {_id: "admin"};

        }else{
            userFound = await employeeModel.findOne({email});
            userType = "employee";
            if(!userFound){
                userFound = await customerModel.findOne({email});
                userType = "customer";            }
        }
        
        if(!userFound){
            return res.json({message: "User not found"})
        }

        //Validar contraseña
        if(userType !== "admin"){
            const isEqual = await bcrypt.compare(password, userFound.password)
            if(!isEqual){
                return res.json({message: "invalid password"})
            }
        }

        //TOKEN
        jsonweb.sign(
            //Que voy a guardar
            {id: userFound._id, userType},
             //Secreto
             config.JWT.SECRET,
             //Cuano expira
             {expiresIn: config.JWT.EXPIRES},
             //Función flecha
             (error, token) =>{
                 if(error) console.log("error en login: "+ error);
                 res.cookie("authToken", token)
                 res.json({message: "Login successful"})
             }
        )


    } catch (error) {
        console.log("error: "+ error);
        res.json({message: "error login"});
    }
}

export default loginController;