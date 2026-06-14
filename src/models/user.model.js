import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    username: { type: String, required: true },
    clerkId: { type: String, unique: true, required: true },
    postsQueried: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

const User = models.User || model("User", UserSchema);

export default User;
