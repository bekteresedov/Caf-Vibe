import mongoose, { Schema } from 'mongoose';
import { IUserDocument } from '../interfaces/document/IUserDocument';

const UserSchema: Schema<IUserDocument> = new mongoose.Schema({
    fullname: {
        type: String,
        unique: true,
    },

    password: {
        type: String,
    },
    profilePhoto: {
        type: String,
    },
    reset: {
        code: {
            type: String,
            default: null,
        },
        time: {
            type: String,
            default: null,
        },
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: 'Contact',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

export const UserModel = mongoose.model<IUserDocument>('User', UserSchema);
