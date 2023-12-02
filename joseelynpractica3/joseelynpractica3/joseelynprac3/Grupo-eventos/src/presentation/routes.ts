import { Router } from 'express';

import {  TpservicioRoutes  } from './TipodeServicio/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/tiposervi', TpservicioRoutes.routes );


    
    return router;
  }


}

