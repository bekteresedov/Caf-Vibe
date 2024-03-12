import mongoose, { Schema, Document } from 'mongoose';
import { IContactDocument } from '../interfaces/document/IContactDocument';



const ContactSchema: Schema<IContactDocument & Document> = new mongoose.Schema({
    phoneNumber: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

export const ContactModel = mongoose.model<IContactDocument & Document>("Contact", ContactSchema);
