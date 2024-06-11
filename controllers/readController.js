import movieModel from "../models/movieSchema.js";

const readController = async(req,res)=>{
    try {
     const  records =  await movieModel.find({})
       if(records){
        res.render('read',{'records':records})
       }else{
        res.render('read')
       } 
    } catch (error) {
       console.log(error.message) 
    }
}



export {readController}