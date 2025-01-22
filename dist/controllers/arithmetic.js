"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOperation = void 0;
const operations_map_1 = require("../utils/operations-map");
const operation_1 = require("../models/operation");
const validations_1 = require("../utils/validations");
//funcion to perform the arithmetic operation.
const makeOperation = (number1, number2, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //set the proper operation based in the type of operator provided
        const operation = operations_map_1.operationsMap[type];
        if (!operation) {
            throw new Error('Invalid operation');
        }
        const response = yield operation(number1, number2);
        return response;
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
//function to handle the request for arithmetic operation
const handleOperation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const start = Date.now();
    const { error, value } = validations_1.validOperation.validate(req.body);
    if (error) {
        res.status(400).json({ status: "error", message: error.details[0]["message"], timestamp: new Date().toISOString() });
        return;
    }
    const { number1, number2, type } = value;
    try {
        const response = yield makeOperation(number1, number2, type);
        if (!response)
            throw Error(`No operation performed`);
        const end = Date.now();
        const lapseTime = (end - start) / 1000;
        const operationResult = new operation_1.OperationResultModel({
            operation: type,
            inputs: {
                number1,
                number2,
            },
            result: response,
            timestamp: new Date().toISOString(),
            responseTime: lapseTime.toFixed(2),
        });
        yield operationResult.save();
        res.status(200).json({ status: "success", operation: type, inputs: { number1, number2 }, result: response, timestamp: operationResult.timestamp, responseTime: `${operationResult.responseTime}ms` });
    }
    catch (error) {
        res.status(500).json({ status: 'error', message: `${error}`, timestamp: new Date().toISOString() });
    }
});
exports.handleOperation = handleOperation;
//# sourceMappingURL=arithmetic.js.map