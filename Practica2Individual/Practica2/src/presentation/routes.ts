import { Router } from 'express';
import { ServicioRoutes } from './servicio/routes'; 
export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/servicio', ServicioRoutes.routes); 
    return router;
  }
}
