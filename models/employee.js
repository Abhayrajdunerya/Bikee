import { Schema, model, models, } from "mongoose";
const {ObjectId} = Schema;

const EmployeeSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: [true, 'Employee is required!'],
        unique: [true, 'Employee cannot be aasigned to multiple centers']
    },
    position: {
        type: String,
        enum: ['manager', 'worker'],
    },
    center: {
        type: ObjectId,
        ref: 'Center',
        required: [true, 'Center is required!'],
    },
}, {timestamps: true});

const Employee = models.Employee || model('Employee', EmployeeSchema);

export default Employee;

