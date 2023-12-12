import { prisma } from '../../app'
import { Request, Response } from "express";

const crearTipoServicio = async (req: Request, res: Response) => {
    try {
        const { nombre, descripcion, } = req.body;
        const nuevoTipoServicio = await prisma.tipoServicio.create({
            data: {
                nombre,
                descripcion,

            },
        });
        res.status(200).json(
            nuevoTipoServicio
        );
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};

const obtenerTipoServicios = async (req: Request, res: Response) => {
    try {
        const tipoServicios = await prisma.tipoServicio.findMany({
            where: {
                estado: true
            }
        });
        res.status(200).json(tipoServicios);
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};

const obtenerTipoServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tipoServicio = await prisma.tipoServicio.findUnique({
            where: {
                id_tipo_servicio: Number(id),
                estado: Boolean(true)
            },
        });
        res.status(200).json(tipoServicio);
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};

const actualizarTipoServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, } = req.body;
        const actualizarTipoServicio = await prisma.tipoServicio.update({
            where: {
                id_tipo_servicio: Number(id),
                estado: Boolean(true)
            },
            data: {
                nombre,
                descripcion,
            },
        });
        res.status(200).json(
            actualizarTipoServicio
            
        );
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};


const eliminarTipoServicio = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const eliminarTipoServicio = await prisma.tipoServicio.update({
            where: {
                id_tipo_servicio: Number(id),
                estado: true
            },
            data: {
                estado: false
            }
        });
        res.status(200).json(
            eliminarTipoServicio
        );
    } catch (e) {
        res.status(500).json({ 'error': e});
    }
};

export default {
    crearTipoServicio,
    obtenerTipoServicios,
    obtenerTipoServicio,
    actualizarTipoServicio,
    eliminarTipoServicio
}