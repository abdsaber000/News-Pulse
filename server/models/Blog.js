import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true , 'You must provide a title for this blog'],
        maxLength : [20 , `The title can't be more than 20 characters`]
    } ,

    publisher : {
        type: String,
        required : [true , 'Blog must have a publisher']

    } ,

    image_url : {
        type : String
    },
   
    content : {
        type: String,
        required : [true , 'You must provide a content']

    },

},{
    timestamps : true
}
)

export const Blog =  mongoose.model('Blog' , BlogSchema);