import users from "../Models/userSchema.mjs";
import theater from '../Models/theaterSchema.mjs'

const addTheater = async (req,res) => {
    const {name ,address ,city , capacity} = req.body;
    const userId = req.payload;

    try{
        const user = await users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.role !== 'vendor') {
            return res.status(403).json({ message: "Access denied. User is not a vendor." });
        }

        const newTheater = new theater({
            name,
            address,
            city,
            capacity,
            userId, 
        });
        await newTheater.save();
        res.status(200).json(newTheater)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const theaterController = {
    addTheater,
   
};

export default theaterController;