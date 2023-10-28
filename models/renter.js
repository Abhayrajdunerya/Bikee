import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const RenterSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: [true, 'User is required!'],
    },
    center: {
        type: ObjectId,
        ref: 'center',
        required: [true, 'Center is required!'],
        // unique: false,
    },
    income: [
        {
            date: Date,
            credit: Number
        }
    ]
}, {timestamps: true});

const Renter = models.Renter || model('Renter', RenterSchema);

export default Renter;

