"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const servicio_routes_1 = require("./customer/routes"); 

class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/servicios', servicio_routes_1.ServicioRoutes.routes); 
        return router;
    }
}
exports.AppRoutes = AppRoutes;
