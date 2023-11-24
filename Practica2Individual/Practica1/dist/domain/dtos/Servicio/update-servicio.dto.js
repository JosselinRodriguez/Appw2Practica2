"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceDto = void 0;

class UpdateServiceDto {
    constructor(id, nombre, costo, reservaId, tipoServicioId, contratos) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.reservaId = reservaId;
        this.tipoServicioId = tipoServicioId;
        this.contratos = contratos;
    }

    get values() {
        const returnObj = {};
        if (this.nombre) returnObj.nombre = this.nombre;
        if (this.costo) returnObj.costo = this.costo;
        if (this.reservaId) returnObj.reservaId = this.reservaId;
        if (this.tipoServicioId) returnObj.tipoServicioId = this.tipoServicioId;
        if (this.contratos) returnObj.contratos = this.contratos;
        return returnObj;
    }

    static create(props) {
        const { id, nombre, costo, reservaId, tipoServicioId, contratos } = props;

        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }

        if (!nombre && !costo && !reservaId && !tipoServicioId && !contratos) {
            return ['At least one property must be provided'];
        }

        return [undefined, new UpdateServiceDto(id, nombre, costo, reservaId, tipoServicioId, contratos)];
    }
}

exports.UpdateServiceDto = UpdateServiceDto;

