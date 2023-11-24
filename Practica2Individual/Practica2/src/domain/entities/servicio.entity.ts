import { ReservaEntity } from "./reserva.entity";
import { TipoServicioEntity } from "./tipo-servicio.entity";
import { ContratoEntity } from "./contrato.entity";

export class ServicioEntity {

  constructor(
    public id: number,
    public nombre: string,
    public costo: number,
    public reserva: ReservaEntity,
    public tipoServicio: TipoServicioEntity,
    public contratos?: ContratoEntity[],
  ) {}

  get Contratos() {
    return this.contratos;
  }

  public static fromObject( object: {[key: string]: any} ): ServicioEntity {
    const { id, nombre, costo, reserva, tipoServicio, contratos } = object;
    if ( !id ) throw 'Id is required';
    if ( !nombre ) throw 'Nombre is required';
    if ( !costo ) throw 'Costo is required';
    if ( !reserva ) throw 'Reserva is required';
    if ( !tipoServicio ) throw 'TipoServicio is required';

    return new ServicioEntity(id, nombre, costo, reserva, tipoServicio, contratos);
  }

}


