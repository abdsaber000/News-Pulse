import mongoose from "mongoose";
import bcrypt from "bcrypt";
export const UserSchema = new mongoose.Schema({
    user_name : {
        type : String,
        required : [true, 'You must provide a user name'],
        unique : [true,  'The user name must be unique']
    },

    password : {
        type : String,
        required : [true, 'You must proivde a password'],
        minlength : 8
    },

    email : {
        type: String,
        required : [true , 'You must provide an email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique : [true , 'Email must be unique']

    },
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

export const User =  mongoose.model('User' , UserSchema);