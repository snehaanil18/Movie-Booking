import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String, 
        required: true 
    },
    releaseDate: { 
        type: Date, 
        required: true 
    },
    duration: { 
        type: Number, 
        required: true 
    },
    director: { 
        type: String, 
        required: true 
    },
    cast: { 
        type: [String], 
        required: true 
    },
    synopsis: { 
        type: String, 
        required: true 
    },
    language: { 
        type: String, 
        required: true 
    },
    rating: { 
        type: Number, 
        min: 0, 
        max: 10 
    },
    posterImage: { 
        type: String, 
        required: true 
    },
    userId:{
        type:String,
        required:true
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie