import { useState } from "react";



function Counter(){

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(c => c + 1)   // Updater function (usually arrow functions) passed as an argument to SetterFunction
    }

    const Decrement = () => {
        setCount(c => c - 1)
    }

    const resetCount = () => {
        setCount(0)
    }
        return(
        <div className="counter">
        <h1>Hola!</h1>
        <p>Counter: {count}</p>
        <button onClick={Increment}>++</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={Decrement}>--</button>
        </div>
    );
}

// function EventHandler(){

//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState()
//     const [color, setColor] = useState()

//     const handleName = (event) => {
//         setName(event.target.value)
//     }

//     const handleQuantity = (event) => {
//         setQuantity(event.target.value)
//     }

//     const pickColor = (event) => {
//         setColor(event.target.value)
//     }

//     return(
//         <div className="handle-events">
//             <input value={name} onChange={handleName}></input>
//             <p>Name: {name}</p>
//             <input value={quantity} onChange={handleQuantity} type="number"></input>
//             <p> Quntity: {quantity}</p>
//             <div className="color-picker">
//                 <h1>Color Picker</h1>
//                 <p className="color-display"style={{background: color}}>Color Picked: {color}</p>
//                 <label>pick color </label><br/>
//                 <input type="color" value={color} onChange={pickColor}></input>
//             </div>
//         </div>
//     );
// }


export default Counter;
// export default EventHandler;