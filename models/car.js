import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const CarSchema = new Schema({
    brand: {
        type: String,
        enum: ['MARUTI SUZUKI', 'HYUNDAI', 'TATA MOTORS', 'MAHINDRA', 'KIA', 'TOYOTA', 'HONDA', 'RENAULT', 'VOLKSWAGEN', 'MG MOTORS', 'SKODA', 'FORD', 'FIAT', 'JEEP', 'NISSAN', 'BMW', 'MERCEDES-BENZ', 'AUDI', 'LAND ROVER', 'LAMBORGHINI', 'ROLLS-ROYCE'],
        required: [true, 'Brand is required!'],
    },
    model: {
        type: String,
        required: [true, 'Model name is required!'],
    },
    carNumber: {
        type: String,
        required: [true, 'Car number is required!'],
    },
    fuleType: {
        type: String,
        enum: ['PETROL', 'DIESEL', 'ELECTRIC', 'OTHERS'],
        required: [true, 'Fule type is required!'],
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

const Car = models.Car || model('Car', CarSchema);

export default Car;

