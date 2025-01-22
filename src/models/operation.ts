import mongoose, {Schema, Document} from 'mongoose';

import { OperationResult } from '../types/Operation';

// export interface OperationResultDocument extends OperationResult, Document{};

const OperationResultSchema = new Schema<OperationResult>({
    operation: {
        type: String,
        required: true,
    },
    inputs: {
        number1: {
            type: Number, 
            required: true,
        },
        number2: {
            type: Number,
            required: true,
        },
    },
    result: {
        type: Schema.Types.Mixed,
        required: true,
    },
    timestamp: {
        type: String,
        required: true,
    },
    responseTime: {
        type: String,
        required: true
    }
});

export const OperationResultModel = mongoose.model<OperationResult>('OperationResult', OperationResultSchema);