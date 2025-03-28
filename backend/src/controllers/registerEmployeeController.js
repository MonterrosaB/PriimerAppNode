//Importar modelo
import employeeModel from "../models/employeeModel.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

//Array de funciones
const registerEmployeeController = {};

registerEmployeeController.register = async (req, res) =>{
    //Pedir todos los datos a guardar
    const {
        name,
        lastname,
        email,
        rol,
        password,
        isActive,
    } = req.body;


try {
    //Verificar si el empleado existe
    const existedEmployee = await employeeModel.findOne({email})
    if(existedEmployee){
        return res.json({message: "Employee Already Exist"})
    }

    // Encriptar contraseña
    const encriptedPassword = await bcryptjs.hash(password, 10)

    //Guardar en la base de datos
    const newEmployee = new employeeModel({
        name,
        lastname,
        email,
        rol,
        password : encriptedPassword,
        isActive})

        await newEmployee.save()

        jsonwebtoken.sign(
            //Que voy a guardar
            {id: newEmployee._id},
            //Secreto
            config.JWT.SECRET,
            //Cuano expira
            {expiresIn: config.JWT.EXPIRESIN},
            //Función flecha
            (error, token) =>{
                if(error) console.log("error: "+ error);
                res.cookie("authToken", token)
                res.json({message: "employee saved"})
            }
        )

    

} catch (error) {
    console.log("error: "+ error);
    res.json({message: "error saving employee"});
    
}
}

export default registerEmployeeController;
