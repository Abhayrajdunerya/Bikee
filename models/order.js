import { Schema, model, models } from "mongoose";
const {ObjectId} = Schema;

const OrderSchema = new Schema({
    vehicle: {
        type: ObjectId,
        ref: 'vehicle',
    },
    orderStatus: {
        type: String,
        default: 'Not Processed',
        enum: [
            'Not Processed',
            'Booked',
            'Cancelled',
            'Returned',
        ]
    },
    paymentIntent: {},
    orderedBy: { type: ObjectId, ref: 'User' },
}, {timestamps: true});

const Order = models.Order || model('Order', OrderSchema);

export default Order;

