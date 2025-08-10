import mongoose from "mongoose";
// import dotenv from "dotenv";


export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI || "", {
        dbName: "ecommerce",
    }).then((c) => console.log(`DB Connected ${c.connection.host}`))
        .catch((e) => console.log(e))
};

// GUfsfLOV9Ra9figO
// mongodb+srv://zohaibsyed914:GUfsfLOV9Ra9figO@cluster0.zgbxmsz.mongodb.net/