import { useState } from "react";
import "./Raknare.css";

function Raknare() {
  // antal = värdet just nu, setAntal = funktionen som ändrar det
  const [antal, setAntal] = useState(0);
  
 function minska() {
  if (antal > 0) {
    setAntal(antal - 1); // minska bara om vi är över 0
  }
}

  return (
    <div className="raknare">
      <button onClick={() => setAntal(antal - 1)}>–</button>
      <span className={antal > 0 ? "antal positiv" : "antal"}>{antal}</span>

      <button onClick={() => setAntal(antal + 1)}>+</button>
      < button onClick={() => setAntal(0)}>Återställ</button>


  
    </div>

  );
}

export default Raknare;