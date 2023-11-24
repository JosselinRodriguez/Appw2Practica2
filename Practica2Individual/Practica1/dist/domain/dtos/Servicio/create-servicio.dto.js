
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceDto = void 0;

class CreateServiceDto {
    constructor(nombre, costo, reservaId, tipoServicioId, contratos) {
        this.nombre = nombre;
        this.costo = costo;
        this.reservaId = reservaId;
        this.tipoServicioId = tipoServicioId;
        this.contratos = contratos;
    }

    static create(props) {
        const { nombre, costo, reservaId, tipoServicioId, contratos } = props;
        if (!nombre) return ['Nombre property is required', undefined];
        if (!costo) return ['Costo property is required', undefined];
        if (!reservaId) return ['ReservaId property is required', undefined];
        if (!tipoServicioId) return ['TipoServicioId property is required', undefined];
        return [undefined, new CreateServiceDto(nombre, costo, reservaId, tipoServicioId, contratos)];
    }
}

exports.CreateServiceDto = CreateServiceDto;
