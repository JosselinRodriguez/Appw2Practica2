-- CreateTable
CREATE TABLE "Reserva" (
    "ID_RESERVA" SERIAL NOT NULL,
    "fechaReserva" TIMESTAMP(3) NOT NULL,
    "horaReserva" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "duracionReserva" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("ID_RESERVA")
);

-- CreateTable
CREATE TABLE "TipoServicio" (
    "ID_TIPO_SERVICIO" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TipoServicio_pkey" PRIMARY KEY ("ID_TIPO_SERVICIO")
);

-- CreateTable
CREATE TABLE "Servicio" (
    "ID_SERVICIO" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "costo" DECIMAL(5,2) NOT NULL,
    "reservaId" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,
    "tipoServicioId" INTEGER NOT NULL,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("ID_SERVICIO")
);

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("ID_RESERVA") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_tipoServicioId_fkey" FOREIGN KEY ("tipoServicioId") REFERENCES "TipoServicio"("ID_TIPO_SERVICIO") ON DELETE RESTRICT ON UPDATE CASCADE;
