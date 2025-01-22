import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import arithmeticRoutes from './routes/arithmetic';

dotenv.config();

const app = express();

const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

//rate limiting configuration
const rateLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests, please try again after 5 minutes',
});

app.use(rateLimiter);

app.use(bodyParser.json());

//set headers to allow cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow_Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,  Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

//endpoint for arithmetic operations
app.use('/api/arithmetic', arithmeticRoutes);

// app.use((req, res, next) => {
//    const error =   
// });

mongoose.connect(dbUrl).then(() => app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})).catch(err => console.log(err));
