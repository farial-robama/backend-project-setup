import { Router } from 'express';
import authRoutes from '../modules/auth/auth.route.js';

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

