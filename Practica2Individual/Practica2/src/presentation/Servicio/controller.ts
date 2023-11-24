import { Request, Response } from 'express';
import { CreateServicioDto, UpdateServicioDto } from '../../domain/dtos';
import { CreateServicio, DeleteServicio, GetServicio, GetServicios, ServicioRepository, UpdateServicio } from '../../domain';

export class ServicioController {

  //* DI
  constructor(
    private readonly servicioRepository: ServicioRepository,
  ) { }

  public getServicios = (req: Request, res: Response) => {
    new GetServicios(this.servicioRepository)
      .execute()
      .then(servicios => res.json(servicios))
      .catch(error => res.status(400).json({ error }));
  };

  public getServicioById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetServicio(this.servicioRepository)
      .execute(id)
      .then(servicio => res.json(servicio))
      .catch(error => res.status(400).json({ error }));
  };

  public createServicio = (req: Request, res: Response) => {
    const [error, createServicioDto] = CreateServicioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateServicio(this.servicioRepository)
      .execute(createServicioDto!)
      .then(servicio => res.json(servicio))
      .catch(error => res.status(400).json({ error }));
  };

  public updateServicio = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateServicioDto] = UpdateServicioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    new UpdateServicio(this.servicioRepository)
      .execute(updateServicioDto!)
      .then(servicio => res.json(servicio))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteServicio = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteServicio(this.servicioRepository)
      .execute(id)
      .then(servicio => res.json(servicio))
      .catch(error => res.status(400).json({ error }));
  };
}
