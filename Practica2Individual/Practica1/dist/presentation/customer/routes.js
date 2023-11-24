"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicioRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller"); // Asegúrate de que esta importación sea correcta

class ServicioRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const servicioController = new controller_1.ServicioController(); // Asegúrate de que esta instanciación sea correcta
        router.get('/', servicioController.getServicios);
        router.get('/:id', servicioController.getServicioById);
        router.post('/', servicioController.createServicio);
        router.put('/:id', servicioController.updateServicio);
        router.delete('/:id', servicioController.deleteServicio);
        return router;
    }
}
exports.ServicioRoutes = ServicioRoutes;

