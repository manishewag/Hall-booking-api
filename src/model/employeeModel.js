import mongoose from "./index.js";
import { validateEmail,validateMobile } from "../common/validation.js";

const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"First Name Is Required"]
      },
    lastName:{
        type:String,
        required:[true,"Last Name Is Required"]
      },
    email:{
        type:String,
        required:[true,"Email Is Required"],
          validate:{
            validator: validateEmail,
            message: props => `${props.value} is not a valid email!`
          }
      },
    password:{
      type:String,
      required:[true,"Password Is Required"]
    },
    mobile:{
        type:String,
        required:[true,"Mobile Is Required"],
          validate:{
            validator: validateMobile,
            message: props => `${props.value} is not a valid phone number!`
          }
      },
    role:{
        type:String,
        enum: {
            values: ['Employee', 'Admin'],
            message: '{VALUE} is not supported'
          }
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:Boolean,
        default:true
    }

  },
  {
    collection:"employee",
    versionKey:"0"
  })

const employeeModel = new mongoose.model('employee',employeeSchema)

export default employeeModel;