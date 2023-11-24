import { CreateServicioDto, UpdateServicioDto } from '../dtos'; // 
import { ServicioEntity } from '../entities/servicio.entity'; // 

export abstract class ServicioDatasource {

  abstract create(createServicioDto: CreateServicioDto): Promise<ServicioEntity>;

  abstract getAll(): Promise<ServicioEntity[]>;

  abstract findById(id: number): Promise<ServicioEntity>;
  abstract updateById(updateServicioDto: UpdateServicioDto): Promise<ServicioEntity>;
  abstract deleteById(id: number): Promise<ServicioEntity>;

}
