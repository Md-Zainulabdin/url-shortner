import mongoose from "mongoose";

export const connectMongoDB = async (url) => {
    await mongoose.connect(url);
    console.log("MongoDB is Connected");
}