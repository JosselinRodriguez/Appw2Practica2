"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reserva_controller_1 = __importDefault(require("../controllers/reserva.controller"));
const router = express_1.default.Router();
router.post("/crear/reserva", reserva_controller_1.default.crearReserva);
router.get("/ver/reservas", reserva_controller_1.default.obtenerReservas);
router.get("/ver/reserva/:id", reserva_controller_1.default.obtenerReserva);
router.patch("/actualizar/reserva/:id", reserva_controller_1.default.actualizarReserva);
router.delete("/eliminar/reserva/:id", reserva_controller_1.default.eliminarReserva);
exports.default = router;
