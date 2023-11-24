import { CreateServicioDto, UpdateServicioDto } from '../../domain/dtos';
import { ServicioRepository } from '../../domain';

export class ServicioController {

  //* DI
  constructor(
    private readonly servicioRepository: ServicioRepository,
  ) { }

  public getServicios = async (req: Request, res: Response) => {
    const servicios = await this.servicioRepository.getAll();
    return res.json(servicios);
  };

  public getServicioById = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      const servicio = await this.servicioRepository.findById(id);
      res.json(servicio);

    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createServicio = async (req: Request, res: Response) => {
    const [error, createServicioDto] = CreateServicioDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const servicio = await this.servicioRepository.create(createServicioDto!);
    res.json(servicio);
  };

  public updateServicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateServicioDto] = UpdateServicioDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedServicio = await this.servicioRepository.updateById(updateServicioDto!);
    return res.json(updatedServicio);
  };

  public deleteServicio = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedServicio = await this.servicioRepository.deleteById(id);
    res.json(deletedServicio);
  };
}



}