import mongoose from 'mongoose'

const theaterSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true 
    },
})

const theater = mongoose.model('theater', theaterSchema);
module.exports = theater