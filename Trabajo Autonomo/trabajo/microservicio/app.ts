import express, { Request, Response  } from 'express'
import {  PrismaClient} from '@prisma/client'

import ReservaRouter from './src/routes/reserva.route'
import cors from 'cors';

export const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT;
app.use(cors({ origin: 'http://localhost:5173' })); //reemplazar por url del front en caso de ser necesario

async function main() {
  app.use(express.json());

  

  // Register API routes
  app.use("/api/v1/",ReservaRouter);
 



  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Ruta ${req.originalUrl} no encontrada` });
  });

  app.listen(port, () => {
    console.log(`Server escuchando en el puerto ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });