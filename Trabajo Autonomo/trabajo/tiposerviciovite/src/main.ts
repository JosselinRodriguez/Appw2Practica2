import { mostrarReservas } from './reserva';
import { mostrarServicios } from './servicio';
import { mostrarTiposServicio } from './tipo_servicio';

document.addEventListener('DOMContentLoaded', () => {
    const enlaceReservas = document.getElementById('enlace-reservas');
    enlaceReservas?.addEventListener('click', mostrarReservas);
  
    const enlaceServicios = document.getElementById('enlace-servicios');
    enlaceServicios?.addEventListener('click', mostrarServicios);
  
    const enlaceTiposServicio = document.getElementById('enlace-tipos-servicio');
    enlaceTiposServicio?.addEventListener('click', mostrarTiposServicio);
  
    mostrarReservas();
  });
