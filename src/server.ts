import http, { type Server } from 'http';
import app from './app.js';
import config from './config/env.js';

const port = config.port;

let server: Server;


const gracefulShutdown = (signal: string, exitCode = 0) => {
  return (error?: unknown) => {
    if (error) {
      console.error(`${signal}`, error);
    } else {
      console.log(`${signal} gracefully shutdown!`);
    }

    server.close(() => {
      process.exit(exitCode);
    });
  };
};

const bootstrap = async () => {
  try {
    const httpServer = http.createServer(app);

    server = httpServer.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });

    // graceful shutdown signals
    process.on('SIGTERM', gracefulShutdown('SIGTERM'));
    process.on('SIGINT', gracefulShutdown('SIGINT'));

    // unexpected errors
    process.on(
      'uncaughtException',
      gracefulShutdown('Uncaught Exception', 1),
    );

    process.on(
      'unhandledRejection',
      gracefulShutdown('Unhandled Rejection', 1),
    );
  } catch (error) {
    console.error('Server stopped', error);
  }
};

bootstrap();