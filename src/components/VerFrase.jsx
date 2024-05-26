import React from 'react'

const VerFrase = ({randomfrase}) => {

  const {phrase, author} = randomfrase

  return (
    <>
      <div className='app__container'>
        <p className='app__frase'>"{phrase}"</p>
        <span className='app__autor'>-{author}</span>
      </div>
    </>
  )
}

export default VerFrase