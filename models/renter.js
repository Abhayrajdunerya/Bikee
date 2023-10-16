import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const RenterSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: [true, 'User is required!'],
    },
    bikes: [
        {
            type: ObjectId,
            ref: 'Bike',
        }
    ],
    cars: [
        {
            type: ObjectId,
            ref: 'Car',
        }
    ],
}, {timestamps: true});

const Renter = models.Renter || model('Renter', RenterSchema);

export default Renter;

