import express from 'express';
import { getPrimeMedianController } from '../controllers/primeMedianController';

const router=express.Router();
router.get('/getPrimeMedian',getPrimeMedianController)

export default router;