import { useState } from "react"

export const useCounter = (inicialValue = 1) => {

    const [counter, setCounter] = useState(inicialValue)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = (value = 1) => {
        //if (counter === 0) return
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(inicialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }


}
