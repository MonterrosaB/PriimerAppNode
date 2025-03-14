const customerController = {};

import customerModel from "../models/customerModel.js";

//SELECT
customerController.getCustomers = async (req, res) => {
    const customers = await customerModel.find()
    res.json(customers)
}

//INSERT
customerController.createCustomer = async (req, res) => {
    const {name, lastname, email, password, isVerified} = req.body;
    
    const newCustomer = new customerModel({name, lastname, email, password, isVerified});
    await newCustomer.save()
    res.json({message : "customer saved"})
}

//DELETE

customerController.deleteCustomer = async (req, res) => {
    await customerModel.findOneAndDelete(req.params.id)
    res.json({message : "customer delete"})
}

//UPDATE

customerController.updateCustomer = async (req, res) => {
    const {name, lastname, email, password, isVerified} = req.body;

    await customerModel.findByIdAndUpdate(req.params.id, {
            name,
            lastname,
            email, 
            password, 
            isVerified
        },{new : true}
    );
    res.json({ message : "customer updated"})
}

export default customerController;