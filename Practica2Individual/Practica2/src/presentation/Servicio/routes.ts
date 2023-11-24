import { Router } from 'express';
import { ServicioController } from './controller';
import { ServicioDatasourceImpl } from '../../infrastructure/datasource/servicio.datasource.impl';
import { ServicioRepositoryImpl } from '../../infrastructure/repositories/servicio.repository.impl';

export class ServicioRoutes {

  static get routes(): Router {
    const router = Router();

    const datasource = new ServicioDatasourceImpl();
    const servicioRepository = new ServicioRepositoryImpl(datasource);
    const servicioController = new ServicioController(servicioRepository);

    router.get('/', servicioController.getServicios);
    router.get('/:id', servicioController.getServicioById);

    router.post('/', servicioController.createServicio);
    router.put('/:id', servicioController.updateServicio);
    router.delete('/:id', servicioController.deleteServicio);

    return router;
  }
}

}

