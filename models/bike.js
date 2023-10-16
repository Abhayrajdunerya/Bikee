import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const BikeSchema = new Schema({
    vehicleId: {
        type: ObjectId,
        ref: 'vehicle'
    }
}, {timestamps: true});

const Bike = models.Bike || model('Bike', BikeSchema);

export default Bike;

