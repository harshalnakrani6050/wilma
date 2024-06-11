import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    ' movie name':{
        type:String,
        require:true,
    },
    'rating':{
        type:String,
        require:true,
    },
    'movie review':{
        type:String,
        require:true,
    },
    'realese date':{
        type:String,
        require:true,
    }
});
const movieModel = new mongoose.model('crud', movieSchema);

export default movieModel;