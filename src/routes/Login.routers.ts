import { Router } from 'express';

// Controllers / Middlewares
import { login } from '../controllers/Login.controller';

const router = Router();

// Rotas e o Controllers
router.post('/login', login);

export default router;
