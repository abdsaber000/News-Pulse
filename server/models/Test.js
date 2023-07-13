import mongoose from "mongoose";

export const TestSchema = new mongoose.Schema({
    name : {
        type : String
    }
})

export const Test =  mongoose.model('Test' , TestSchema);