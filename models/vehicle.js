import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const VehicleSchema = new Schema({
    brand: {
        type: String,
        required: [true, 'Brand is required!'],
    },
    model: {
        type: String,
        required: [true, 'Model is required!'],
    },
    mfYear: {
        type: Number,
    },
    fuel: {
        type: String,
        enum: ['PATROL', 'DIESEL', 'ELECTRIC'],
    },
    engineCap: {
        type: Number,
    },
    startType: {
        type: String,
    },
    vin: {
        type: String,
        required: [true, 'Vehicle Identification number (VIN) is required!'],
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: [true, 'Owner is required!'],
    },
    images: Array,
    ratings: [
        {
            star: Number,
            postedBy: {type: ObjectId, ref: 'User'},
        },
    ],
    vehicleType: {
        type: String,
        enum: ['bike', 'car']
    }

}, {timestamps: true});

const Vehicle = models.Vehicle || model('Bike', VehicleSchema);

export default Vehicle;

