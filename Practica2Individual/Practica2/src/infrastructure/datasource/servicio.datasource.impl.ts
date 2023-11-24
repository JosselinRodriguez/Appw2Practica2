import { prisma } from '../../data/postgres';
import { CreateServicioDto, ServicioDatasource, ServicioEntity, UpdateServicioDto } from '../../domain';

export class ServicioDatasourceImpl implements ServicioDatasource {

  async create(createServicioDto: CreateServicioDto): Promise<ServicioEntity> {
    const { contratos, ...rest } = createServicioDto;
    const servicio = await prisma.servicio.create({
      data: {
        ...rest,
        Contratos: {
          create: contratos,
        },
      },
      include: {
        Contratos: true,
      },
    });

    return ServicioEntity.fromObject(servicio);
  }

  async getAll(): Promise<ServicioEntity[]> {
    const servicios = await prisma.servicio.findMany({
      include: {
        Contratos: true,
      },
    });

    return servicios.map(servicio => ServicioEntity.fromObject(servicio));
  }

  async findById(id: number): Promise<ServicioEntity> {
    const servicio = await prisma.servicio.findFirst({
      where: { id },
      include: {
        Contratos: true,
      },
    });

    if (!servicio) throw `Servicio with id ${id} not found`;

    return ServicioEntity.fromObject(servicio);
  }

  async updateById(updateServicioDto: UpdateServicioDto): Promise<ServicioEntity> {
    await this.findById(updateServicioDto.id);

    const updatedServicio = await prisma.servicio.update({
      where: { id: updateServicioDto.id },
      data: {
        ...updateServicioDto.values,
        Contratos: {
          upsert: updateServicioDto.values.contratos.map((contrato) => ({
            where: { id: contrato.id || undefined },
            update: contrato,
            create: contrato,
          })),
        },
      },
      include: {
        Contratos: true,
      },
    });

    return ServicioEntity.fromObject(updatedServicio);
  }

  async deleteById(id: number): Promise<ServicioEntity> {
    await this.findById(id);
    const deleted = await prisma.servicio.delete({
      where: { id },
      include: {
        Contratos: true,
      },
    });

    return ServicioEntity.fromObject(deleted);
  }
}
