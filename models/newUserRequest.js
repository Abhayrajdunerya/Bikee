import { Schema, model, models } from "mongoose";
const { ObjectId } = Schema;

const newUserRequestSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'user',
        required: [true, 'User is required!'],
    },
    center: {
        type: ObjectId,
        ref: 'center',
        required: [true, 'Center is required!'],
    },
    status: {
        type: String,
        enum: ['verified', 'unverified'],
        default: 'unverified',
    }
}, {timestamps: true});

const NewUserRequest = models.NewUserRequest || model('NewUserRequest', newUserRequestSchema);

export default NewUserRequest;

