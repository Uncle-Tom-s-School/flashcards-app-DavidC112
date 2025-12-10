import React, { use, useEffect, useState } from 'react'
import Cards from './components/Cards'


  export type CardType ={
    question: string,
    answer: string,
    point: number
  }



const App = () => {


const [cards, setCards] = useState<CardType[]>([])


const [number, setNumber] = useState(0);



  useEffect(() => {
    fetch('cards.json')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error(err))
  }, [])


  return (
    <div className='Container'>
      {cards.length > 0 ? <Cards z={cards} x={number}/> : <p>Loading...</p>}
    </div>
  )
}

export default App
