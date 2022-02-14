import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phone: String,
    address: String,
    register: {type: Date, default: Date.now},
    dbStatus: Boolean
});

const user = mongoose.model("users", userSchema);

export default user;