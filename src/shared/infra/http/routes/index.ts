import { Router } from 'express';
import { vaultRoutes } from './vaults.routes';

const router = Router();

router.use('/vault', vaultRoutes);

export { router };
