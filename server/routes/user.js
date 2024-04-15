import express from 'express';

import { user, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/', user);
router.post('/update/:id', verifyToken, updateUser);

export default router; 