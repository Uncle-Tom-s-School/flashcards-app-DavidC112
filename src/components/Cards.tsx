import { useState } from "react";
import { type CardType} from "../App";






const Cards = (props: {z:CardType[], x:number}) => {

const [newNumber, setNewNumber] =  useState(props.x);
const [flipped, setFlipped] = useState(true);  

function nextCard(){
    if(newNumber + 1 >= props.z.length){
        setNewNumber(0);
        return;
    }    
    setNewNumber(newNumber + 1);
    setFlipped(prev => !prev);
    console.log(flipped);
}

function turn(){
    setFlipped(prev => !prev);
}


  return (
    <div className="MainCard">
        <div onClick={turn}className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h1>{props.z[newNumber].question}</h1> 
                </div>  
            <div className="flip-card-back">
                {props.z[newNumber].answer} 
                <div>
                    <div className="butt">
                        <button onClick={nextCard}>Eltaláltam</button>
                        <button onClick={nextCard}>Nem találtam el</button>
                    </div>
                </div>
                </div>

            </div>
            <h2>{newNumber + 1}/{props.z.length}</h2>
        </div>
    </div>
  )
}

export default Cards
