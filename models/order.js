import { Schema, model, models } from "mongoose";
const {ObjectId} = Schema;

const OrderSchema = new Schema({
    vehicle: {
        type: ObjectId,
        ref: 'vehicle',
    },
    bookingInfo: {
        bookingType: String,
        city: String,
        vehicleType: String,
        pickingDate: Date,
        droppingDate: Date,
    },
    orderStatus: {
        type: String,
        default: 'not processed',
        enum: [
            'not processed',
            'booked',
            'cancelled',
            'returned',
        ]
    },
    paymentIntent: {},
    orderedBy: { type: ObjectId, ref: 'user' },
    center: {
        type: ObjectId,
        ref: 'center'
    }
}, {timestamps: true});

const Order = models.Order || model('Order', OrderSchema);

export default Order;

