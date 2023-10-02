import express from 'express';
import { addRide} from '../controller/ride-controller.js';


const router = express.Router();

router.post('/add', addRide);


export default router;