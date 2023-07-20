import mongoose from "mongoose";
import { json } from "stream/consumers";

const userSchema = new mongoose.Schema({
    _id: Number,
    username: String,
    name: String,
    designation: String,
    contacts: {},
    technical_skills: [],
    academics: [],
    experience: [] 
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;