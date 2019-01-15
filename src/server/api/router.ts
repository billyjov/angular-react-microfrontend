import { Router } from 'express';
import taskRouter from './controllers/tasks';

const router = Router();

router.use(taskRouter);

export default router;
