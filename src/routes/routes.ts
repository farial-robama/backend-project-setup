import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';

const router: Router = Router();

const moduleRouters = [
  {
    path: '/auth',
    route: authRoutes,
  },
];

moduleRouters.forEach((module) => {
  router.use(module.path, module.route);
});

export default router;