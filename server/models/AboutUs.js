import mongoose from "mongoose";

export const AboutUsSchema = new mongoose.Schema({
    image_url : {
        type : String,
        required : [true, 'About Us must contain an image.']
    },
    content : {
        type : String,
        required : [true , 'About Us must contain a content.']
    }
});

export const AboutUs = mongoose.model('AboutUs' , AboutUsSchema);