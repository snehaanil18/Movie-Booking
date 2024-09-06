import users from '../Models/userSchema.mjs'
import jwt from 'jsonwebtoken'

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

const login = async(req,res) => {
    const { email, password } = req.body;
    const adminEmail = "admin@example.com";
    const adminPassword = "adminpassword";
  
    try{
        if (email === adminEmail && password === adminPassword) {
            const adminToken = jwt.sign({ userId: "admin", role: "admin" }, "superkey", { expiresIn: '1h' });
            return res.status(200).json({ message: "Admin logged in", adminToken });
        }
        
        const existingUser = await users.findOne({ email, password });
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "superkey");
            res.status(200).json({message: "User logged in", existingUser, token });
        } else {
            // If no user is found with the provided email and password
            res.status(404).json('Invalid email or password' );
        }
    }
    catch(err) {
        // Handle server errors
        res.status(500).json('Login failed. ' + err.message);
    }
}



const userController = {
    register,
    login
};

export default userController;