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
        unique: [true, 'Mobile no. already exists!']
    },
    address: {
        pincode: Number,
        state: String,
        city: String,
        currentAddress: String,
        permanentAddress: String,
    },
    documents: {
        aadhar: Object,
        drivingLicense: Object,
    },
}, {timestamps: true});

const User = models.User || model('User', UserSchema);

export default User;

