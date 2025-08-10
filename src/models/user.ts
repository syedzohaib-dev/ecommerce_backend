import { timeStamp } from "console";
import mongoose, { type Date } from "mongoose";
import validator from "validator"

interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    photo: string;
    role: "admin" | "user";
    gender: "male" | "female";
    dob: Date;
    createdAt: Date;
    updatedAt: Date;
    // Virtual Atribute
    age: number


}

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Plese enter Id"]
    },
    name: {
        type: String,
        required: [true, "Plese enter Name"]
    },
    email: {
        type: String,
        unique: [true, "Email already Exist"],
        required: [true, "Plese enter Email"],
        validate: validator.default.isEmail
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    photo: {
        type: String,
        required: [true, "Plese enter Photo"]
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Please enter your Gender"]
    },
    dob: {
        type: Date,
        required: [true, "Please enter Date of birth"]
    },


},
    { timestamps: true }
);

schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || today.getMonth() ===
        dob.getMonth() && today.getDate() < dob.getDate()) {
        age--;

    }
    return age;
})


export const User = mongoose.model<IUser>("User", schema);

 