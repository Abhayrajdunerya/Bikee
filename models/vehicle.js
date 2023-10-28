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
        // enum: ['patrol', 'diesel', 'electric'],
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
        ref: 'renter',
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
        enum: ['bike', 'car'],
        require: [true, 'Vehicle type is required!']
    },
    price: {
        hourly: Number,
        daily: Number,
        weekly: Number,
        monthly: Number,
        
    },
    depositeAmt: Number,
    perHourCharge: Number,
    terms: String,
}, {timestamps: true});

const Vehicle = models.Vehicle || model('Vehicle', VehicleSchema);

export default Vehicle;

