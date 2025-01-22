"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const dotenv_1 = __importDefault(require("dotenv"));
const arithmetic_1 = __importDefault(require("./routes/arithmetic"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;
//rate limiting configuration
const rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again after 5 minutes',
});
app.use(rateLimiter);
app.use(body_parser_1.default.json());
//set headers to allow cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow_Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,  Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});
//endpoint for arithmetic operations
app.use('/api/arithmetic', arithmetic_1.default);
// app.use((req, res, next) => {
//    const error =   
// });
mongoose_1.default.connect(dbUrl).then(() => app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})).catch(err => console.log(err));
//# sourceMappingURL=index.js.map