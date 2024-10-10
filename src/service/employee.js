import employeeModel from "../model/employeeModel.js";

const getAllEmployee = async(req,res)=>{
    try {
        let users = await employeeModel.find();
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
        })

    }

}

const createEmployee = async(req,res)=>{
    try {
        let user = await employeeModel.findOne({email:req.body.email})
        if(!user)
        {
            await employeeModel.create(req.body)

            res.status(201).send({
                message:"Employee Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Employee with email ${req.body.email} already exists` 
            })
        }
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
    })
    }
}


export default {
    getAllEmployee,
    createEmployee
}