import { useState } from 'react'
import Profile from './components/Profile/Profile'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import Button from './components/Button/Button'


function App() {
  const [name, setName] = useState("Edi")
  const [passwoed, setPassword] = useState("")
  const [copy, setCopy] = useState("Copiar")

  function changeName() {
   const name =prompt("Informe o novo nome")
    setName(name)
  }

  return (
    <>
     <Profile>
      <ProfileInfo>
        <h1>{name}</h1>
        <p>Estudando React</p>
        <Button onClick={() => changeName()}>Trocar Nome</Button>
      </ProfileInfo>

      <div className="botoes" style={{
        display: 'flex',
        gap: '1rem', 
    }}>
        <Button onClick={()=> {
          setCopy("Copiar")
          setPassword("51614dwadwd!!!")         

        }}>Gerar</Button>

        <Button onClick={() => {
          setCopy("Copiado!")
        }}>{copy}</Button>

        <span id='password'>{passwoed}</span>
      </div>  
      
     </Profile>
    </>
  )
}

export default App