import React from 'react'
import arr from "../utilidades/phrases.json"
import randomArr from '../servicios/randomArr'
import imagesArr from "../utilidades/fondos.json"

const VerBoton = ({setRandomFrase, setImage}) => {

  const handleClick = () =>{
    const rando = randomArr(arr)
    const foto = randomArr(imagesArr)
    setRandomFrase(rando)
    setImage(foto)
  }

  return (
    <button onClick={handleClick} className='app__btn'>Ver otro</button>
  )
}

export default VerBoton