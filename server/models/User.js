import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    user_name : {
        type : String
    },

    password : {
        type : String
    },

    email : {
        type: String
    },
})


export const User =  mongoose.model('User' , UserSchema);