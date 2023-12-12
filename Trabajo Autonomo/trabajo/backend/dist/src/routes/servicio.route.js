"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const servicio_controller_1 = __importDefault(require("../controllers/servicio.controller"));
const router = express_1.default.Router();
router.post("/crear/servicio", servicio_controller_1.default.crearServicio);
router.get("/ver/servicios", servicio_controller_1.default.obtenerServicios);
router.get("/ver/servicio/:id", servicio_controller_1.default.obtenerServicio);
router.patch("/actualizar/servicio/:id", servicio_controller_1.default.actualizarServicio);
router.delete("/eliminar/servicio/:id", servicio_controller_1.default.eliminarServicio);
exports.default = router;
