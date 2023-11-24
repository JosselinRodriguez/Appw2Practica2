import { CreateServicioDto, UpdateServicioDto } from '../dtos'; // Asegúrate de tener los dtos correctos
import { ServicioEntity } from '../entities/servicio.entity'; // Asegúrate de importar la entidad correcta

export abstract class ServicioRepository {

  abstract create(createServicioDto: CreateServicioDto): Promise<ServicioEntity>;

  abstract getAll(): Promise<ServicioEntity[]>;

  abstract findById(id: number): Promise<ServicioEntity>;
  abstract updateById(updateServicioDto: UpdateServicioDto): Promise<ServicioEntity>;
  abstract deleteById(id: number): Promise<ServicioEntity>;

}
