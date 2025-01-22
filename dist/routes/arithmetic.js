"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const arithmetic_1 = require("../controllers/arithmetic");
const router = (0, express_1.Router)();
//route for handling the arithmetic operations
router.post('/operation', arithmetic_1.handleOperation);
exports.default = router;
//# sourceMappingURL=arithmetic.js.map