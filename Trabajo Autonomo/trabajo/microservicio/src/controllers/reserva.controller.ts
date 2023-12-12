import { prisma } from '../../app'
import { Request, Response } from "express";

const crearReserva = async (req: Request, res: Response) => {
    try {
        const { duracionReserva,horaReserva,fechaReserva, } = req.body;
        const nuevaReserva = await prisma.reserva.create({
            data: {
                duracionReserva,
                horaReserva,
                fechaReserva,
            },
        });
        res.status(200).json(
            nuevaReserva
        );
    } catch (e) {
        res.status(500).json({
            'error': e
        });
    }
};

const obtenerReservas = async (req: Request, res: Response) => {
    try {
        const reservas = await prisma.reserva.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(reservas);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

const obtenerReserva = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const reserva = await prisma.reserva.findUnique({
            where: {
                id_reserva: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(reserva);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

const actualizarReserva = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { duracionReserva, horaReserva, fechaReserva } = req.body;
        const actualizarReserva = await prisma.reserva.update({
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
        res.status(200).json(
            actualizarReserva
        );
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};


const eliminarReserva = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const eliminarReserva = await prisma.reserva.update({
            where: {
                id_reserva: Number(id),
                estado: Boolean(true)
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(
            eliminarReserva
        );
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};

export default {
     crearReserva,
     obtenerReservas,
     obtenerReserva,
     actualizarReserva,
     eliminarReserva
}