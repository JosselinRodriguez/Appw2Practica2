import { CreateServicioDto } from '../../dtos'; 
import { ServicioEntity } from '../../entities/servicio.entity'; 
import { ServicioRepository } from '../../repositories/servicio.repository'; 

export interface CreateServicioUseCase {
  execute(dto: CreateServicioDto): Promise<ServicioEntity>;
}

export class CreateServicio implements CreateServicioUseCase {
  
  constructor(
    private readonly repository: ServicioRepository,
  ) {}
  
  execute(dto: CreateServicioDto): Promise<ServicioEntity> {
    return this.repository.create(dto);
  }
}


