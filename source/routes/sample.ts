import express, { Router } from 'express';
import controller from '../controllers/sample';

const router = express();

router.get('/ping', controller.sampleHealthCheck);

export = router;
