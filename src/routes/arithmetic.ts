
import {Router, Request, Response} from 'express';


import {handleOperation} from '../controllers/arithmetic';

const router = Router();

//route for handling the arithmetic operations
router.post('/operation', handleOperation);

export default router;