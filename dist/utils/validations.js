"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validOperation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validOperation = joi_1.default.object({
    number1: joi_1.default.number().required(),
    number2: joi_1.default.number().required(),
    type: joi_1.default.string()
        .valid('+', '-', '*', '/')
        .required()
        .messages({
        'any.only': 'Invalid operation. Allowed operations are: +, -, *, /',
    }),
});
//# sourceMappingURL=validations.js.map