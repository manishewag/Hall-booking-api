import mongoose from "./index.js";

const bookingschema = new mongoose.Schema({
    roomId:{
        type:String,
        required:[true,"Room id Is Required"]
      },
    employeeId:{
        type:String,
        required:[true,"Employee Id Is Required"]
      },
    startTime:{
        type:Date,
        required:true 
      },
    endTime:{
        type:Date,
        required:true 
      },
    status:{
        type:Boolean,
        default:true
    }
  },
  {
    collection:"booking",
    versionKey:false
  })

export default new mongoose.model('booking',bookingschema)

