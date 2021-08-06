import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import '@shared/container';
import { AppError } from '@errors/AppError';
import { router } from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.status_code).send({
        error: err.message,
      });
    }

    return response.status(500).send({
      error: `Internal Server Error - ${err.message}`,
    });
  }
);

export { app };
