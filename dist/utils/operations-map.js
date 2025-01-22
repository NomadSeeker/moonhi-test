"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationsMap = void 0;
const addition_1 = require("../operations/addition");
const division_1 = require("../operations/division");
const multiplication_1 = require("../operations/multiplication");
const substraction_1 = require("../operations/substraction");
//function to map the operation type to the arithmetic function correctly
exports.operationsMap = {
    '+': addition_1.addition,
    '-': substraction_1.substraction,
    '*': multiplication_1.multiplication,
    '/': division_1.division,
};
//# sourceMappingURL=operations-map.js.map