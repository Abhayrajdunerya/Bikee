import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const CarSchema = new Schema({
    vehicleId: {
        type: ObjectId,
        ref: 'vehicle'
    }
}, {timestamps: true});

const Car = models.Car || model('Car', CarSchema);

export default Car;

