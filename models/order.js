import { Schema, model, models } from "mongoose";
const {ObjectId} = Schema;

const OrderSchema = new Schema({
    vehicle: {
        type: ObjectId,
        ref: 'Bike' || 'Car',
    },
    orderStatus: {
        type: String,
        default: 'BOOKED'
        // default: 'Not_Processed',
        // enum: [
        //     'Not_Processed',
        //     'Processing',
        //     'Dispatched',
        //     'Cancelled',
        //     'Completed',
        //     'Cash On Delivery',
        // ]
    },
    paymentIntent: {},
    orderedBy: { type: ObjectId, ref: 'User' },
}, {timestamps: true});

const Order = models.Order || model('Order', OrderSchema);

export default Order;

