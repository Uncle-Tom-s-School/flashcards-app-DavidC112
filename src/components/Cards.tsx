import {  useState } from "react";
import { type CardType } from "../App";

const Cards = (props: { 
    z: CardType[]; 
    number: number; 
    setNumber: (number: number) => void;
}) => {
  const [flipped, setFlipped] = useState(false);

  function nextCard() {
    setFlipped(false);
    setTimeout(() => {
      if (props.number + 1 >= props.z.length) {
        props.setNumber(0);
        return;
      }
      props.setNumber(props.number + 1);
      
    }, 500);
  }

  return (
    <div className="MainCard">
      <div className="flip-card">
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
         <div className={`flip-card-front ${props.z[props.number]?.points > 0 ? "green" : props.z[props.number]?.points === 0 ? "white" : "red"}`}  onClick={() => setFlipped(true)}>
            <h1>{props.z[props.number]?.question}</h1>
          </div>
          <div className="flip-card-back">
            {props.z[props.number]?.answer}
            <div>
              <div className="butt">
                <button onClick={nextCard}>Eltaláltam</button>
                <button onClick={nextCard}>Nem találtam el</button>
              </div>
            </div>
          </div>
        </div>
        <h2>{props.number + 1}/{props.z.length}</h2>
        <progress max={props.z.length} value={props.number + 1}></progress>
      </div>
    </div>
  );
};

export default Cards;