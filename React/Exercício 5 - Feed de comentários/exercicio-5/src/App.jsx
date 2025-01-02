import { useState } from 'react'
import './App.css'


function App() {
  

  return (
    <>
      <div className="form">
        <form>
          <h3>sessão de comentarios</h3>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="comentarios">Comentarios</label>
          <textarea name="comentarios" id="comentarios" cols="30" rows="10" placeholder="Digite seu comentario"></textarea>
        </form>
        
        <button type="submit">Enviar Comentario</button>
      </div>

      <div className="comentarios">
        <ul id="comentarios">

        </ul>
      </div>
    </>
  )
}

export default App