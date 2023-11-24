import { CreateServicioDto, ServicioDatasource, ServicioEntity, ServicioRepository, UpdateServicioDto } from '../../domain';

export class ServicioRepositoryImpl implements ServicioRepository {

  constructor(
    private readonly datasource: ServicioDatasource,
  ) { }

  create(createServicioDto: CreateServicioDto): Promise<ServicioEntity> {
    return this.datasource.create(createServicioDto);
  }

  getAll(): Promise<ServicioEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<ServicioEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateServicioDto: UpdateServicioDto): Promise<ServicioEntity> {
    return this.datasource.updateById(updateServicioDto);
  }

  deleteById(id: number): Promise<ServicioEntity> {
    return this.datasource.deleteById(id);
  }
}



