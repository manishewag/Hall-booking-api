import mongoose from "./index.js";

const roomschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Room Name Is Required"]
      },
    capacity:{
        type:Number,
        min:[10,"Minimum 10 seat is required"],
        required:true
      },
    amenities:{
        type:Array,
        default:[] 
      },
      images:{
        type:Array,
        default:[]
      },
    status:{
        type:Boolean,
        default:true
    }
  },
  {
    collection:"room",
    versionKey:false
  })

export default new mongoose.model('room',roomschema)

