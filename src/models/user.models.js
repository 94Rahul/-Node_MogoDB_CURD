import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        lowecase: true,
        trim: true,
        index: true
    },
    lastName: {
        type: String,
        require: true,
        lowecase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowecase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
},
    {
        timestamps: true

    }
)

export const User = model("user", userSchema);