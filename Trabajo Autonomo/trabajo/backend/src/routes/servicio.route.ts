import express from "express";
import ServicioController from "../controllers/servicio.controller";

const router = express.Router();

router.post("/crear/servicio",ServicioController.crearServicio);
router.get("/ver/servicios",ServicioController.obtenerServicios);
router.get("/ver/servicio/:id",ServicioController.obtenerServicio);
router.patch("/actualizar/servicio/:id",ServicioController.actualizarServicio);
router.delete("/eliminar/servicio/:id",ServicioController.eliminarServicio);

export default router;
