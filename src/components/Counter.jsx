import { useState } from "react";
import '../styles/counter.css'

const Counter = () => {

    const [number , setNumber] = useState(1);

    let sumar = () => {
        setNumber( number + 1);
    }; 

    let restar = () => {
        setNumber ( number - 1);
    }
    
    return (
        <div className="counter-card">
            <button className="btn-counter" onClick={restar}>-</button>
            <p className="count-numb">{number}</p>
            <button className="btn-counter" onClick={sumar}>+</button>
        </div>
    );
}

export default Counter;