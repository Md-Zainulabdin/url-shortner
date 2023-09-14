import mongoose from "mongoose";

const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is Connected");
}

export default connectMongoDB;