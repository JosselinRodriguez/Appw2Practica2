"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tipo_servicio_controller_1 = __importDefault(require("../controllers/tipo_servicio.controller"));
const router = express_1.default.Router();
router.post("/crear/tipo_servicio", tipo_servicio_controller_1.default.crearTipoServicio);
router.get("/ver/tipo_servicios", tipo_servicio_controller_1.default.obtenerTipoServicios);
router.get("/ver/tipo_servicio/:id", tipo_servicio_controller_1.default.obtenerTipoServicio);
router.patch("/actualizar/tipo_servicio/:id", tipo_servicio_controller_1.default.actualizarTipoServicio);
router.delete("/eliminar/tipo_servicio/:id", tipo_servicio_controller_1.default.eliminarTipoServicio);
exports.default = router;
