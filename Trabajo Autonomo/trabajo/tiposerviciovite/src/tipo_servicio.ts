import './style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


export async function mostrarTiposServicio (){

  const response = await fetch('http://localhost:8080/api/v1/backend/ver/tipo_servicios')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Descripcion</th><th>Acciones</th></tr>`
  data.forEach((tiposervi: Itiposervi) => {
    divTable += `<tr><td>${tiposervi.id_tipo_servicio}</td><td>${tiposervi.nombre}</td><td>${tiposervi.descripcion}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="nombre" class="form-label">nombre</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
    </div>
    <div class="mb-3">
      <label for="descripcion" class="form-label">descripcion</label>
      <input type="text" class="form-control" id="descripcion">
    </div>

    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
      const descripcion = document.querySelector<HTMLInputElement>('#descripcion')!.value
      const response = await fetch('http://localhost:8080/api/v1/backend/crear/tipo_servicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, descripcion,})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      mostrarTiposServicio();
      // location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:8080/api/v1/backend/eliminar/tipo_servicio/${id}`, {
        method: 'DELETE'
      })
      mostrarTiposServicio();
      // location.reload()
     })
  })
    document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
      btn.addEventListener('click', async ()=>{ 
        const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
        const response = await fetch(`http://localhost:8080/api/v1/backend/ver/tipo_servicio/${id}`)
        const data = await response.json()
        //add button for cancel
        const btnCancel = `<button class="btn btn-cancelar">Cancelar</button>`
        const divForm = `<form>
        <div class="mb-3">
          <label for="nombre" class="form-label">nombre</label>
          <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">descripcion</label>
          <input type="text" class="form-control" id="descripcion" value="${data.descripcion}">
        </div>
        <button type='submit'  class="btn btn-Guardar">Guardar</button>
        ${btnCancel}
        </form>`
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
        const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
        btnSave?.addEventListener('click', async (e)=>{
          e.preventDefault()
          const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
          const descripcion = document.querySelector<HTMLInputElement>('#descripcion')!.value
          const response = await fetch(`http://localhost:8080/api/v1/backend/actualizar/tipo_servicio/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre, descripcion,})
          })
          const data = await response.json()
          console.log(data)
          // reload page
          mostrarTiposServicio();
          // location.reload()
      })
     })
  })

  
  


}


