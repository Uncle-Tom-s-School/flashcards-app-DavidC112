
const NewCards = (props: {create:(question:string, answer:string, points:number) => void}) => {



  return (
    <div className="newCard">
        <h1>Új Kártya Létrehozása</h1>
      <div className="CreatingCard">
        <label>
            Kérdés <br /><textarea className="input" id="question" placeholder="Kérdés..."></textarea>
        </label>
        <label>
            Válasz <br /><textarea className="input" id="answer" placeholder="Válasz..."></textarea>
        </label> 
      </div>
      <div className="xd">
        <button onClick={() => {
        const question = (document.getElementById("question") as HTMLInputElement).value;
        const answer = (document.getElementById("answer") as HTMLInputElement).value;
        props.create(question, answer, 0);
      }}>Hozzáad</button>
      </div>
    </div>
  )
}

export default NewCards
