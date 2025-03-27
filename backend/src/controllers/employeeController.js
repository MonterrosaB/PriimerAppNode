const employeeController = {};

import employeeModel from "../models/employeeModel.js";

//SELECT
employeeController.getEmployees = async (req, res) => {
    const employees = await employeeModel.find()
    res.json(employees)
}

//INSERT
employeeController.createEmployee = async (req, res) => {
    const {name, lastname, email, rol, password, isActive} = req.body;
    
    const newEmployee = new employeeModel({name, lastname, email, rol, password, isActive});
    await newEmployee.save()
    res.json({message : "employee saved"})
}

//DELETE

employeeController.deleteEmployee = async (req, res) => {
    await employeeModel.findOneAndDelete(req.params.id)
    res.json({message : "employee delete"})
}

//UPDATE

employeeController.updateEmployee = async (req, res) => {
    const {name, lastname, email, rol, password, isActive} = req.body;

    await employeeModel.findByIdAndUpdate(req.params.id, {
        name, lastname, email, rol, password, isActive
        },{new : true}
    );
    res.json({ message : "employee updated"})
}

export default employeeController;