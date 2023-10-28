import { Schema, model, models } from "mongoose";
const { ObjectId } = Schema;

const newUserRequestSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'user',
        required: [true, 'User is required!'],
        unique: [true, 'User has already registered!'],
    },
    center: {
        type: ObjectId,
        ref: 'center',
        required: [true, 'Center is required!'],
        // unique: false,
    },
    status: {
        type: String,
        enum: ['verified', 'unverified'],
        default: 'unverified',
    },
    
}, {timestamps: true});

const NewUserRequest = models.NewUserRequest || model('NewUserRequest', newUserRequestSchema);

export default NewUserRequest;

