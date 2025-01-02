import { useState } from 'react'
import Conteiner from './components/Conteiner/Conteiner'
import Button from './components/Button/Button'

function App() {
 return (
   <>
    <Conteiner> 
      <h1>Gerador de Senhas</h1>
      <Button>Gerar Senha</Button>
      <Button>Copiar</Button>
    </Conteiner>


      
    
   </>
 )
}

export default App