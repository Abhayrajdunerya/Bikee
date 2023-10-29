import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    image: {
        type: String,
    },
    mobile: {
        type: Number,
        // unique: [true, 'Mobile no. already exists!']
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    address: {
        pincode: Number,
        state: String,
        city: String,
        area: String,
        address: String,
    },
    aadhar: Array,
    drivingLicense: Array,
    role: {
        type: String,
        enum: ['user', 'admin', 'manager', 'worker', 'renter'],
        default: 'user',
        required: [true, 'Role is required!']
    }
}, {timestamps: true});

const User = models.User || model('User', UserSchema);

export default User;

