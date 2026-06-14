import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/atom`,
    );
    console.log("MongoDB connected!!! ", connectionInstance.connection.host);
  } catch (error) {
    console.error("src/utils/db.ts:  MongoDB connection error: ", error);
    throw error;
    //process.exit(1);
  }
}

export default connectDB;
