import express from "express";
import TipoServicioController from "../controllers/tipo_servicio.controller";

const router = express.Router();

router.post("/crear/tipo_servicio",TipoServicioController.crearTipoServicio);
router.get("/ver/tipo_servicios",TipoServicioController.obtenerTipoServicios);
router.get("/ver/tipo_servicio/:id",TipoServicioController.obtenerTipoServicio);
router.patch("/actualizar/tipo_servicio/:id",TipoServicioController.actualizarTipoServicio);
router.delete("/eliminar/tipo_servicio/:id",TipoServicioController.eliminarTipoServicio);

export default router;