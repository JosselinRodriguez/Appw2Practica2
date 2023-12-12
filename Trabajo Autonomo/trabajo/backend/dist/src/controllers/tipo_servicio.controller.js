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
const crearTipoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion, } = req.body;
        const nuevoTipoServicio = yield app_1.prisma.tipoServicio.create({
            data: {
                nombre,
                descripcion,
            },
        });
        res.status(200).json(nuevoTipoServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const obtenerTipoServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipoServicios = yield app_1.prisma.tipoServicio.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(tipoServicios);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const obtenerTipoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tipoServicio = yield app_1.prisma.tipoServicio.findUnique({
            where: {
                id_tipo_servicio: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(tipoServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const actualizarTipoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, descripcion, } = req.body;
        const actualizarTipoServicio = yield app_1.prisma.tipoServicio.update({
            where: {
                id_tipo_servicio: Number(id),
                estado: Boolean(true)
            },
            data: {
                nombre,
                descripcion,
            },
        });
        res.status(200).json(actualizarTipoServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const eliminarTipoServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarTipoServicio = yield app_1.prisma.tipoServicio.update({
            where: {
                id_tipo_servicio: Number(id),
                estado: true
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(eliminarTipoServicio);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
exports.default = {
    crearTipoServicio,
    obtenerTipoServicios,
    obtenerTipoServicio,
    actualizarTipoServicio,
    eliminarTipoServicio
};
