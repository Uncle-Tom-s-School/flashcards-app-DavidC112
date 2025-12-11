import  { useEffect, useState } from 'react'
import Cards from './components/Cards'
import NewCards from './components/NewCards'


  export type CardType ={
    question: string,
    answer: string,
    points: number
  }



const App = () => {


const [cards, setCards] = useState<CardType[]>([])


const [number, setNumber] = useState(0);
const [NewCardsVisible, setNewCardsVisible] = useState(false);



  useEffect(() => {
    fetch('cards.json')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error(err))
  }, [])

const restartPractice = () => {
  setNumber(0);
  setNewCardsVisible(false);
}


const createNewCard = (question: string, answer: string) => {
  const newCard: CardType = {
    question,
    answer,
    points: 0
  };
  setCards([...cards, newCard]);
  setNewCardsVisible(false);
}

const newCard = () =>{
  setNewCardsVisible(true)
}

  return (
    <div className='Container'>
      
      {NewCardsVisible ? <NewCards create={createNewCard} /> : <Cards z={cards} number={number} setNumber={setNumber} />}
      <div className='otherButtons'>
        <button className='btn1' onClick={restartPractice}>Új gyakorlás indítása</button> 
        {!NewCardsVisible ? <button className='btn2' onClick={newCard}>Új kártya készítése</button>: <p></p>}
      </div>
    </div>
  )
}

export default App
