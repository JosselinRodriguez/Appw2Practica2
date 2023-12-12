"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const crearServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { costo, nombre, reservaId, tipoServicioId } = req.body;
        const nuevoServicio = yield app_1.prisma.servicio.create({
            data: {
                costo,
                nombre,
                reservaId,
                tipoServicioId
            },
        });
        res.status(200).json(nuevoServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const obtenerServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicios = yield app_1.prisma.servicio.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(servicios);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const obtenerServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const servicio = yield app_1.prisma.servicio.findUnique({
            where: {
                id_servicio: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(servicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const actualizarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { costo, nombre, reservaId, tipoServicioId } = req.body;
        const actualizarServicio = yield app_1.prisma.servicio.update({
            where: {
                id_servicio: Number(id),
                estado: Boolean(true)
            },
            data: {
                costo,
                nombre,
                reservaId,
                tipoServicioId
            },
        });
        res.status(200).json(actualizarServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const eliminarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarServicio = yield app_1.prisma.servicio.update({
            where: {
                id_servicio: Number(id),
                estado: Boolean(true)
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(eliminarServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
exports.default = {
    crearServicio,
    obtenerServicios,
    obtenerServicio,
    actualizarServicio,
    eliminarServicio
};
