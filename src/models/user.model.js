import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    clerkId: { type: String, unique: true, required: true },
    postsQueried: [{ type: String }],
    plan: {
      type: String,
      required: true,
      enum: ["free", "pro"],
      default: "free",
    }, //? Add more later if more plans are added(hopefully 🤞)
    credits: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema);

export default User;
