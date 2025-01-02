import { useState } from 'react'
import './app.css'


function App() {
  const [authorName, setAuthorName] = useState('')
  const [comment, setComment] = useState('')

  function handleSubmmit(e) {
    e.preventDefault()
    

    if (authorName === '' || comment === '') {
      alert('Preencha todos os campos')      
    }

    
    
   
    
  }

  return (    
    <>
      <h3>Feed de comentarios</h3>
      <form >
        <div className="author">
        <label htmlFor="author">Email:</label>
        <input type="text" id='author' required onChange={(e)=> setAuthorName(e.target.value)}/>
        </div>

        <div className="commenter">
          <label htmlFor="commenter">Comentario</label>
          <textarea id="commenter" cols="30" rows="10" onChange={(e)=> setComment(e.target.value)}></textarea>
        </div>

        <button type="submit" onClick={(e) => handleSubmmit(e)}>Enviar comentario</button>
      </form>

      <div className="userCommenters">
        <div className="comment">
          <h4>nome usuario</h4>
          <p>data</p>
          <p>comentario</p>
        </div>
      </div>
    </>     
  )
}

export default App
