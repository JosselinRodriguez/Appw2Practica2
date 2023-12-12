import { prisma } from '../../app'
import { Request, Response } from "express";

const crearServicio = async (req: Request, res: Response) => {
    try {
        const { costo, nombre, reservaId, tipoServicioId } = req.body;
        const nuevoServicio = await prisma.servicio.create({
            data: {
                costo,
                nombre,
                reservaId,
                tipoServicioId
            },
        });
        res.status(200).json(nuevoServicio);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

const obtenerServicios = async (req: Request, res: Response) => {
    try {
        const servicios = await prisma.servicio.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(servicios);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

const obtenerServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const servicio = await prisma.servicio.findUnique({
            where: {
                id_servicio: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(servicio);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

const actualizarServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { costo, nombre, reservaId, tipoServicioId } = req.body;
        const actualizarServicio = await prisma.servicio.update({
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
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};


const eliminarServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const eliminarServicio = await prisma.servicio.update({
            where: {
                id_servicio: Number(id),
                estado: Boolean(true)
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(eliminarServicio);
    } catch (e) {
        res.status(500).json({ 'error': e });
    }
};

export default {
    crearServicio,
    obtenerServicios,
    obtenerServicio,
    actualizarServicio,
    eliminarServicio
}