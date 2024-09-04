import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum: ['user', 'vendor'],
    },
    password:{
        type:String,
        required:true
    },
})

const users = mongoose.model('users',userSchema)
export default  users;