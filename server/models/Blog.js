import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , 'You must provide a title for this blog'],
        maxLength : [20 , `The title can't be more than 20 characters`]
    } ,

    publisher : {
        type: String,
    } ,

    short_description : {
        type : String,
        maxLength : [30 , `The short description can't be more than 30 characters`]
    },

    image_url : {
        type : String
    },
   

})

export const Blog =  mongoose.model('Blog' , BlogSchema);