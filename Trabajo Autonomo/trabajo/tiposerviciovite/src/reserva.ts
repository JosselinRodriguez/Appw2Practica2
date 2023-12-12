import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


export async function mostrarReservas() {
  const response = await fetch('http://localhost:8080/api/v1/microservicio/ver/reservas');
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Duración</th><th>Hora</th><th>Fecha</th><th>Acciones</th></tr>`;
  data.forEach((reserva: Ireserva) => {
    const fechaReserva = new Date(reserva.fechaReserva);
    fechaReserva.setDate(fechaReserva.getDate() + 1); // Ajuste sumando un día
    divTable += `<tr><td>${reserva.id_reserva}</td><td>${reserva.duracionReserva}</td><td>${reserva.horaReserva}</td><td>${fechaReserva.toLocaleDateString()}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button></td></tr>`;
});
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary">Agregar</button>`;
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary');
  btnAgregar?.addEventListener('click', () => {
    const divForm = `<form>
      <div class="mb-3">
        <label for="duracionReserva" class="form-label">Duración</label>
        <input type="number" class="form-control" id="duracionReserva" aria-describedby="duracionReserva">
      </div>
      <div class="mb-3">
        <label for="horaReserva" class="form-label">Hora</label>
        <input type="text" class="form-control" id="horaReserva">
      </div>
      <div class="mb-3">
        <label for="fechaReserva" class="form-label">Fecha</label>
        <input type="date" class="form-control" id="fechaReserva">
      </div>
      <button type='submit' class="btn btn-save">Guardar</button>
      <button type='submit' class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
    btnSave?.addEventListener('click', async (e) => {
      e.preventDefault();
      const duracionReservaInput = document.querySelector<HTMLInputElement>('#duracionReserva')!.value;
      const duracionReserva = parseInt(duracionReservaInput, 10);
      const horaReserva = document.querySelector<HTMLInputElement>('#horaReserva')!.value;
      const fechaReservaInput = document.querySelector<HTMLInputElement>('#fechaReserva')!.value;
      const formattedFechaReserva = new Date(fechaReservaInput);
      const fechaReserva = formattedFechaReserva.toISOString();
      console.log(formattedFechaReserva);

      const response = await fetch('http://localhost:8080/api/v1/microservicio/crear/reserva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ duracionReserva, horaReserva, fechaReserva })
      });
      const data = await response.json();
      console.log(data);
      // recargar la página
      mostrarReservas();
      // location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:8080/api/v1/microservicio/eliminar/reserva/${id}`, {
        method: 'DELETE'
      });
      mostrarReservas();
      // location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(`http://localhost:8080/api/v1/microservicio/ver/reserva/${id}`);
      const data = await response.json();

      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
        <div class="mb-3">
          <label for="duracionReserva" class="form-label">Duración</label>
          <input type="number" class="form-control" id="duracionReserva" aria-describedby="duracionReserva" value="${data.duracionReserva}">
        </div>
        <div class="mb-3">
          <label for="horaReserva" class="form-label">Hora</label>
          <input type="text" class="form-control" id="horaReserva" value="${data.horaReserva}">
        </div>
        <div class="mb-3">
          <label for="fechaReserva" class="form-label">Fecha</label>
          <input type="date" class="form-control" id="fechaReserva" value="${new Date(data.fechaReserva).toISOString().split('T')[0]}">
        </div>
        <button type='submit' class="btn btn-save">Guardar</button>
        ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save');
      btnSave?.addEventListener('click', async (e) => {
        e.preventDefault();
        const duracionReservaInput = document.querySelector<HTMLInputElement>('#duracionReserva')!.value;
        const duracionReserva = parseInt(duracionReservaInput, 10);

        const horaReserva = document.querySelector<HTMLInputElement>('#horaReserva')!.value;
        const fechaReservaInput = document.querySelector<HTMLInputElement>('#fechaReserva')!.value;
        const formattedFechaReserva = new Date(fechaReservaInput);
        const fechaReserva = formattedFechaReserva.toISOString();
        console.log(formattedFechaReserva);

        const response = await fetch(`http://localhost:8080/api/v1/microservicio/actualizar/reserva/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({ duracionReserva, horaReserva, fechaReserva })
        });
        const data = await response.json();
        console.log(data);
        // recargar la página
        mostrarReservas();
        // location.reload();
      });
    });

  });


}
