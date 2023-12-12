import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export async function mostrarServicios() {
  const response = await fetch('http://localhost:8080/api/v1/backend/ver/servicios');
  const data = await response.json();

  const responseReservas = await fetch('http://localhost:8080/api/v1/microservicio/ver/reservas');
  const dataReservas = await responseReservas.json();

  const responseTiposServicio = await fetch('http://localhost:8080/api/v1/backend/ver/tipo_servicios');
  const dataTiposServicio = await responseTiposServicio.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Costo</th><th>Nombre</th><th>Reserva ID</th><th>Tipo Servicio ID</th><th>Acciones</th></tr>`;
  data.forEach((servicio: Iservicio) => {
    divTable += `<tr><td>${servicio.id_servicio}</td><td>${servicio.costo}</td><td>${servicio.nombre}</td><td>${servicio.reservaId}</td><td>${servicio.tipoServicioId}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary" >Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
    <div class="mb-3">
      <label for="costo" class="form-label">Costo</label>
      <input type="number" class="form-control" id="costo" aria-describedby="costo">
    </div>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre">
    </div>
    <div class="mb-3">
      <label for="reservaId" class="form-label">Reserva ID</label>
      <select class="form-control" id="reservaId">
        ${dataReservas.map((reserva: any) => `<option value="${reserva.id_reserva}">${reserva.id_reserva}</option>`).join('')}
      </select>
    </div>
    <div class="mb-3">
      <label for="tipoServicioId" class="form-label">Tipo Servicio ID</label>
      <select class="form-control" id="tipoServicioId">
        ${dataTiposServicio.map((tipoServicio: any) => `<option value="${tipoServicio.id_tipo_servicio}">${tipoServicio.id_tipo_servicio}</option>`).join('')}
      </select>
    </div>
    <button type='submit' class="btn btn-save">Guardar</button>
    <button type='submit' class="btn btn-cancel">Cancelar</button>
  </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const costoInput = document.querySelector<HTMLInputElement>('#costo')!.value;
      const costo = parseInt(costoInput, 10);
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
      const reservaIdInput = document.querySelector<HTMLSelectElement>('#reservaId')!.value;
      const reservaId = parseInt(reservaIdInput, 10);
      const tipoServicioIdInput = document.querySelector<HTMLSelectElement>('#tipoServicioId')!.value;
      const tipoServicioId = parseInt(tipoServicioIdInput, 10);
      const response = await fetch('http://localhost:8080/api/v1/backend/crear/servicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ costo, nombre, reservaId, tipoServicioId })
      });
      const data = await response.json();
      console.log(data);
      // recargar la página
      mostrarServicios();
      // location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:8080/api/v1/backend/eliminar/servicio/${id}`, {
        method: 'DELETE'
      });
      mostrarServicios();
      // location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:8080/api/v1/backend/ver/servicio/${id}`);
      const data = await response.json();

      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
        <div class="mb-3">
          <label for="costo" class="form-label">Costo</label>
          <input type="number" class="form-control" id="costo" aria-describedby="costo" value="${data.costo}">
        </div>
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" value="${data.nombre}">
        </div>
        <div class="mb-3">
          <label for="reservaId" class="form-label">Reserva ID</label>
          <input type="number" class="form-control" id="reservaId" value="${data.reservaId}">
        </div>
        <div class="mb-3">
          <label for="tipoServicioId" class="form-label">Tipo Servicio ID</label>
          <input type="number" class="form-control" id="tipoServicioId" value="${data.tipoServicioId}">
        </div>
        <button type='submit' class="btn btn-save">Guardar</button>
        ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        e.preventDefault();
        const costoInput = document.querySelector<HTMLInputElement>('#costo')!.value;
        const costo = parseInt(costoInput, 10);
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value;
        const reservaIdInput = document.querySelector<HTMLSelectElement>('#reservaId')!.value;
        const reservaId = parseInt(reservaIdInput, 10);
        const tipoServicioIdInput = document.querySelector<HTMLSelectElement>('#tipoServicioId')!.value;
        const tipoServicioId = parseInt(tipoServicioIdInput, 10);
        const response = await fetch(`http://localhost:8080/api/v1/backend/actualizar/servicio/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ costo, nombre, reservaId, tipoServicioId })
        });
        const data = await response.json();
        console.log(data);
        // recargar la página
        mostrarServicios();
        // location.reload();
      });
    });
  });
}
