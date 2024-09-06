import movies from '../Models/movieSchema.mjs'
import theaters from '../Models/theaterSchema.mjs'
import users from '../Models/userSchema.mjs'

const addMovie = async (req, res) => {
    const { title, genre, releaseDate, duration, director, synopsis, language, rating } = req.body;
    const cast = req.body.cast;
    const durationNumber = parseInt(duration, 10);
    const ratingNumber = parseFloat(rating);
    const userId = req.payload;
    const posterImage = req.file.filename
    
    if (userId!='admin') {
        return res.status(403).json({ message: "Access denied. User is not a admin." });
    }
    
    else {
        const newMovie = new movies({
            title,
            genre,
            releaseDate,
            duration: durationNumber,
            director,
            cast,
            synopsis,
            language,
            rating: ratingNumber,
            posterImage,
            userId
        })
        await newMovie.save();
        res.status(200).json(newMovie)
    }
}

const userMovies = async (req, res) => {
    const userId = req.payload;
    
    if (userId == !'admin') {
        return res.status(401).json('Access Denied.')
    }
    try {
        const existingMovies = await movies.find();
        if(existingMovies){
            res.status(200).json(existingMovies)
        }
        else {
            res.status(401).json('database empty')
        }
    }
    catch(err){
        res.status(500).json('failed' + err)
    }
}

const movieController = {
    addMovie,
    userMovies
}

export default movieController;