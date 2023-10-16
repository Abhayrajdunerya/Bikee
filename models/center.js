import { Schema, model, models } from "mongoose";

const CenterSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    mobile: {
        type: Number,
        unique: [true, 'Mobile no. already exists!'],
        required: [true, 'Mobile no. is required!']
    },
    address: {
        pincode: Number,
        state: String,
        city: String,
        area: String,
        address: String,
    },
}, {timestamps: true});

const Center = models.Center || model('Center', CenterSchema);

export default Center;

