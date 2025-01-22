import {Request, Response} from 'express';

import { operationsMap } from "../utils/operations-map"
import { OperationResultModel } from '../models/operation';
import { validOperation } from '../utils/validations';


//funcion to perform the arithmetic operation.
const makeOperation = async (number1: number, number2: number, type: string): Promise<number | string> => {
    
    try {
        //set the proper operation based in the type of operator provided
        const operation = operationsMap[type];

        if(!operation) {
            throw new Error('Invalid operation');
        }

        const response = await operation(number1, number2);

        return response;
    }catch(error) {
        throw new Error(`${error}`);
    }
};

//function to handle the request for arithmetic operation
export const handleOperation = async (req: Request, res:Response): Promise<void> => {
    const start = Date.now();

    const {error, value} = validOperation.validate(req.body);

    if(error) {
        res.status(400).json({status: "error", message: error.details[0]["message"], timestamp: new Date().toISOString()});
        return;
    }

    const {number1, number2, type} = value;

    try {
        
        const response = await makeOperation(number1, number2, type);
        
       
    
        if(!response)
            throw Error(`No operation performed`);

        const end = Date.now();

        const lapseTime = (end - start) / 1000;

        const operationResult = new OperationResultModel({
            operation: type,
            inputs: {
                number1,
                number2,
            },
            result: response,
            timestamp: new Date().toISOString(),
            responseTime: lapseTime.toFixed(2),
        });

        await operationResult.save();

        res.status(200).json({status: "success", operation: type, inputs: {number1, number2}, result: response, timestamp: operationResult.timestamp, responseTime:`${operationResult.responseTime}ms`});
    }catch(error) {
        res.status(500).json({status: 'error', message: `${error}`, timestamp: new Date().toISOString()});
    }
    
}

