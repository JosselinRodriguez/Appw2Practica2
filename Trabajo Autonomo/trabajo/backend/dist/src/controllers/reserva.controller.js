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
const crearReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { duracionReserva, horaReserva, fechaReserva, } = req.body;
        const nuevaReserva = yield app_1.prisma.reserva.create({
            data: {
                duracionReserva,
                horaReserva,
                fechaReserva,
            },
        });
        res.status(200).json(nuevaReserva);
    }
    catch (e) {
        res.status(500).json({
            'error': e
        });
    }
});
const obtenerReservas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservas = yield app_1.prisma.reserva.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(reservas);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const obtenerReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const reserva = yield app_1.prisma.reserva.findUnique({
            where: {
                id_reserva: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(reserva);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const actualizarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { duracionReserva, horaReserva, fechaReserva } = req.body;
        const actualizarReserva = yield app_1.prisma.reserva.update({
            where: {
                id_reserva: Number(id),
                estado: Boolean(true)
            },
            data: {
                duracionReserva,
                horaReserva,
                fechaReserva,
            },
        });
        res.status(200).json(actualizarReserva);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
const eliminarReserva = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const eliminarReserva = yield app_1.prisma.reserva.update({
            where: {
                id_reserva: Number(id),
                estado: Boolean(true)
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(eliminarReserva);
    }
    catch (e) {
        res.status(500).json({ 'error': e });
    }
});
exports.default = {
    crearReserva,
    obtenerReservas,
    obtenerReserva,
    actualizarReserva,
    eliminarReserva
};
