import React from 'react'

export const Contacto = () => {
  return (
    <div className='contacto-container'>
      <h1>¡Contactate con nosotros!</h1>

      <div className='form-container' >

        <form>
          <div className='mail-y-nombre'>
            <div className='nombre'>
              <label>Nombre:</label>
              <input type="text" placeholder="Introduzca su nombre" />
            </div>
            <div className='mail'>
              <label>Email:</label>
              <input type="email" placeholder="Introduzca su email" />
            </div>
          </div>
          <div className='mensaje-y-check'>
          <div className='mensaje'>
            <label>Mensaje:</label>
            <textarea className='input-mensaje' type="text" placeholder="Mensaje" />
          </div>
          <div>
            <label>
              Desea recibir notificaciones por mail?: <input className='check' type="checkbox" name="myCheckbox" defaultChecked={true} />
            </label>
            
          </div>
          <div className='botones'>
          <button type='submit'>Enviar</button>
          <button type='reset'> Limpiar</button>
          </div>
          </div>
        </form>

      </div>


    </div>
  )
}
