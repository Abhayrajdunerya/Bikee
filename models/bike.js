import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const BikeSchema = new Schema({
    brand: {
        type: String,
        enum: ['HERO', 'HONDA', 'TVS', 'ROYAL ENFIELD', 'KTM', 'YAMAHA', 'SUZUKI', 'MAHINDRA', 'JAWA', 'KAWASAKI', 'DUCATI', 'OTHERS'],
        required: [true, 'Brand is required!'],
    },
    model: {
        type: String,
        required: [true, 'Model name is required!'],
    },
    bikeNumber: {
        type: String,
        required: [true, 'Bike number is required!'],
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

}, {timestamps: true});

const Bike = models.Bike || model('Bike', BikeSchema);

export default Bike;

