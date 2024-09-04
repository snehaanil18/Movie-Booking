import users from '../Models/userSchema.mjs'

const register = async (req, res) => {
    const { name, email, phone, role , password } = req.body;
    try{
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User already exsists")
        }
        else{
            const newUser = new users({
                name,
                email,
                phone,
                role,
                password,
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
}



const userController = {
    register,
   
};

export default userController;