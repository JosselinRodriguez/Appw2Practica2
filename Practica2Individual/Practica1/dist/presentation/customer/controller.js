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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class ServicioController {
    //* DI
    constructor() {
        this.getServicios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const servicios = yield postgres_1.prisma.servicio.findMany();
            return res.json(servicios);
        });
        this.getServicioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                return res.status(400).json({ error: 'ID argument is not a number' });
            const servicio = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            (servicio)
                ? res.json(servicio)
                : res.status(404).json({ error: `Servicio with id ${id} not found` });
        });
        this.createServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createServicioDto] = dtos_1.CreateServicioDto.create(req.body);
            if (error)
                return res.status(400).json({ error });
            const _a = createServicioDto, { contratos } = _a, rest = __rest(_a, ["contratos"]);
            const servicio = yield postgres_1.prisma.servicio.create({
                data: rest
            });
            res.json(servicio);
        });
        this.updateServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateServicioDto] = dtos_1.UpdateServicioDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                return res.status(400).json({ error });
            const servicio = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            if (!servicio)
                return res.status(404).json({ error: `Servicio with id ${id} not found` });
            const updatedServicio = yield postgres_1.prisma.servicio.update({
                where: { id },
                data: updateServicioDto.values
            });
            res.json(updatedServicio);
        });
        this.deleteServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const servicio = yield postgres_1.prisma.servicio.findFirst({
                where: { id }
            });
            if (!servicio)
                return res.status(404).json({ error: `Servicio with id ${id} not found` });
            const deleted = yield postgres_1.prisma.servicio.delete({
                where: { id }
            });
            (deleted)
                ? res.json(deleted)
                : res.status(400).json({ error: `Servicio with id ${id} not found` });
        });
    }
}
exports.ServicioController = ServicioController;
