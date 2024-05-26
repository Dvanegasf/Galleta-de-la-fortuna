import { useState } from 'react'
import './App.css'
import VerBoton from './components/VerBoton'
import VerFrase from './components/VerFrase'
import arr from "./utilidades/phrases.json"
import randomArr from './servicios/randomArr'
import imagesArr from "./utilidades/fondos.json"

function App() {

  const rando = randomArr(arr)
  const [randomfrase, setRandomFrase] = useState(rando)
  const fondo = randomArr(imagesArr)
  const [imagen, setImage] = useState(fondo)


  const appstyle ={
    backgroundImage: `url(../fortuna-1/fondo${imagen}.jpg)`
    }


  return (
    <div className = "app" style={appstyle}>
      <h1 className = "app__titulo">GALLETA DE LA FORTUNA</h1>
      <VerFrase
      randomfrase = {randomfrase}
      />
      <VerBoton
      setRandomFrase = {setRandomFrase}
      setImage = {setImage}
      />

    </div>
  )
}

export default App
