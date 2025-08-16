import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Plese enter Name"]
    },
    photo: {
        type: String,
        required: [true, "Plese enter Photo"]
    },
    price: {
        type: Number,
        required: [true, "Plese enter Price"]
    },
    stock: {
        type: Number,
        required: [true, "Plese enter Stock"]
    },
    category: {
        type: String,
        required: [true, "Plese enter Category"],
    },
},

    { timestamps: true }
);




export const Product = mongoose.model("Product", schema);

