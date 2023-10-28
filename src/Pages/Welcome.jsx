import { useEffect, useState } from 'react'
import { versiculos } from '../service/versiculos'
import '../styles/verse.css'
function Welcome() {
  const [verseOfTheDay, setVerseOfTheDay] = useState()
  useEffect(() => {
    setVerseOfTheDay(versiculos[Math.floor(Math.random() * versiculos.length)])
  }, [])
  return (
    <div className="verse-contanier">
      <div className="verse-header">
        <figure>
          <img
            src="../public/jesus-by-freepik.png"
            alt="icono iamgen de jesus animada by freepik"
          />
        </figure>
        <h3>Tengo un mensaje para ti: </h3>
      </div>
      <div className="verse-text">
        <p>{verseOfTheDay}</p>
      </div>
    </div>
  )
}

export default Welcome
