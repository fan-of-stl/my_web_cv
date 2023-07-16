import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: Number,
    username: String,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;