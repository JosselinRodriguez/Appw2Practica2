import { UpdateServicioDto } from '../../dtos'; 
import { ServicioEntity } from '../../entities/servicio.entity'; 
import { ServicioRepository } from '../../repositories/servicio.repository'; 

export interface UpdateServicioUseCase {
  execute(dto: UpdateServicioDto): Promise<ServicioEntity>;
}

export class UpdateServicio implements UpdateServicioUseCase {
  
  constructor(
    private readonly repository: ServicioRepository,
  ) {}
  
  execute(dto: UpdateServicioDto): Promise<ServicioEntity> {
    return this.repository.updateById(dto);
  }
}


