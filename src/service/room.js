import roomModel from "../model/roomModel.js"
const getAllRooms= async(req,res)=>{
    try {

         let rooms = await roomModel.find();

         res.status(200).send({
            message:"Room Data Fetch Successfully",
            data:rooms
        })
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
        })
    }
}

const createRoom = async(req,res)=>{
    try {
         await roomModel.create(req.body)

         res.status(201).send({
            message:"Room Created Successfully"
        })
    }
    catch(error) {
        res.status(500).send({
            message:error.message || "internal server error",
            error
        })
    }
}

const editRoom = async(req,res)=>{
    try {

        let {roomId} = req.params

        let room = await roomModel.findById(roomId)

        if(room)
        {
            // await roomModel.updateOne({_id:roomId},{$set:req.body})
            room.name = req.body.name;
            room.capacity = req.body.capacity;
            room.amenities = req.body.amenities;
            room.images = req.body.images;

            await room.save()

            res.status(200).send({
                message:"Room Edited Successfully"
                
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid Room Id"
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
    getAllRooms,
    createRoom,
    editRoom
}