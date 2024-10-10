import mongoose from 'mongoose'
import 'dotenv/config.js'

console.log(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`)

// mongoose.connect(`${process.env.MONGODB_URL}`) // sample 1
// mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DB}`)  // sample 2
mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`)
.then((value)=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

export default mongoose;

