import { Router } from 'express';
import { vaultRoutes } from './vaults.routes';

const router = Router();

router.use('/', (req, res) => {
  res.send({ message: 'ok' });
});

router.use('/vault', vaultRoutes);

export { router };
