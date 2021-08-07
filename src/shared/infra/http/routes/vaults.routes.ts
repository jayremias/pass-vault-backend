import { Request, Response, Router } from 'express';

const vaultRoutes = Router();

vaultRoutes.get('/test', (request: Request, response: Response) => {
  response.send({
    message: 'ok',
  });
});

export { vaultRoutes };
