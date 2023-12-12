"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const reserva_route_1 = __importDefault(require("./src/routes/reserva.route"));
const cors_1 = __importDefault(require("cors"));
exports.prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' })); //reemplazar por url del front en caso de ser necesario
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        app.use(express_1.default.json());
        // Register API routes
        app.use("/api/v1/", reserva_route_1.default);
        // Catch unregistered routes
        app.all("*", (req, res) => {
            res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
        });
        app.listen(port, () => {
            console.log(`Server escuchando en el puerto ${port}`);
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.prisma.$connect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield exports.prisma.$disconnect();
    process.exit(1);
}));
