import express from "express";
import ReservaController from "../controllers/reserva.controller";

const router = express.Router();

router.post("/crear/reserva",ReservaController.crearReserva);
router.get("/ver/reservas",ReservaController.obtenerReservas);
router.get("/ver/reserva/:id",ReservaController.obtenerReserva);
router.patch("/actualizar/reserva/:id",ReservaController.actualizarReserva);
router.delete("/eliminar/reserva/:id",ReservaController.eliminarReserva);

export default router;