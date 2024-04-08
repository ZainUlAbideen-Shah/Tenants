import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://www.freepik.com/icon/user_3177440#fromView=keyword&page=1&position=6&uuid=4b73ff2b-4b78-427f-befa-5b289dd8d985'
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;