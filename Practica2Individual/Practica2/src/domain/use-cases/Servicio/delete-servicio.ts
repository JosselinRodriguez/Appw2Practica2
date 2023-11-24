import { ServicioEntity } from '../../entities/servicio.entity'; // 
import { ServicioRepository } from '../../repositories/servicio.repository'; 

export interface DeleteServicioUseCase {
  execute(id: number): Promise<ServicioEntity>;
}

export class DeleteServicio implements DeleteServicioUseCase {
  
  constructor(
    private readonly repository: ServicioRepository,
  ) {}
  
  execute(id: number): Promise<ServicioEntity> {
    return this.repository.deleteById(id);
  }
}


