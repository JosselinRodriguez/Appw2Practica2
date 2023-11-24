import { GetServicioDto } from '../../dtos'; 
import { ServicioEntity } from '../../entities/servicio.entity'; 
import { ServicioRepository } from '../../repositories/servicio.repository'; 

export interface GetServicioUseCase {
  execute(id: number): Promise<ServicioEntity>;
}

export class GetServicio implements GetServicioUseCase {
  
  constructor(
    private readonly repository: ServicioRepository,
  ) {}
  
  execute(id: number): Promise<ServicioEntity> {
    return this.repository.findById(id);
  }
}


