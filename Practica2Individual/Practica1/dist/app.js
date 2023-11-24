"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envs_1 = require("./config/envs");
const servicio_routes_1 = require("./presentation/servicio-routes"); // Cambié la importación para reflejar las rutas de Servicio
const server_1 = require("./presentation/server");

(async () => {
    await main();
})();

async function main() {
    const server = new server_1.Server({
        port: envs_1.envs.PORT,
        public_path: envs_1.envs.PUBLIC_PATH,
        routes: servicio_routes_1.ServicioRoutes.routes, // Cambié la referencia a las rutas para reflejar las rutas de Servicio
    });
    await server.start(); // Hice que la función start sea asincrónica
}

