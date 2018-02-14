import mongoose, { Schema } from 'mongoose';
import validator from 'validator';


const ClientSchema = new Schema({
    FirstName: {
        type: String,
        required: [true, 'First name is required']
    },
    LastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    MiddleName: {
        type: String
    },
    FullName: {
        type: String
    },
    Address: {
        type: String
    },
    MobileNumber: {
        type: String
    },
    Email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    Context: {
        type: String
    },
    DateCreated: {
        type: Date,
        default: new Date()
    },
    DateUpdated: {
        type: Date
    },
    UpdatedBy: {
        type: String
    }
})

export default mongoose.model('Client', ClientSchema);