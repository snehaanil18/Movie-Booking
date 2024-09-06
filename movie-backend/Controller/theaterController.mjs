import users from "../Models/userSchema.mjs";
import theater from '../Models/theaterSchema.mjs'

const addTheater = async (req,res) => {
    const {name ,address ,city , capacity} = req.body;
    const userId = req.payload;

    try{
        if(userId == 'admin'){
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

        else {
            return res.status(403).json({ message: "Access denied. User is not a vendor." });
        }

    }
    catch(err){
        res.status(500).json(err)
    }
}

const userTheaters = async(req,res) => {
    const userId = req.payload;
    if (userId == !'admin') {
        return res.status(401).json('Access Denied.')
    }

    try{
        const existingTheaters = await theater.find();
        if(existingTheaters){
            res.status(200).json(existingTheaters)
        }
        else {
            res.status(401).json('database empty')
        }
    }
    catch(err){
        res.status(500).json('failed' + err)
    }
}

const theaterController = {
    addTheater,
    userTheaters
};

export default theaterController;