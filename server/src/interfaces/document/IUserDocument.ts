import { Document, Types } from "mongoose";
import { IContactDocument } from "./IContactDocument";

interface IReset {
    code: string;
    time: string;
}

export interface IUserDocument extends Document {
    fullname: string;
    password: string;
    profilePhoto: string;
    reset: IReset;
    contact: Types.ObjectId | IContactDocument;
}
