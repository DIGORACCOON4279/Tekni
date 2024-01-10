import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    useEffect(() => {
        document.title = `Counter ${counter}`
    }, [counter] );

    const increaseCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decreaseCounter = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    return (
        <div className="counterSection">
            <button onClick={decreaseCounter} className="decrease"> - </button>
            <p className="counter"><strong> {counter} </strong></p>
            <button onClick={increaseCounter} className="increase"> + </button>
        </div>
    )
}

export default Counter
