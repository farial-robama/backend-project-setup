import express, { Application, Request, Response } from 'express';
import notFound from './middleware/notFound.js';
import globalError from './middleware/globalError.js';
import router from './routes/routes.js';

const app: Application = express();

app.use(express.json());

// base route
app.use('/api/v1', router);

app.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to API',
    uptime: process.uptime(),
    time: new Date().toISOString(),
  });
});

// middlewares
app.use(notFound);
app.use(globalError);

export default app;