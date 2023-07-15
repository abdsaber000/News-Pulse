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


export const UserA =  mongoose.model('User' , UserSchema);