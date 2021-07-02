import React, { useContext,  useState } from 'react'

const CounterContext = React.createContext();
export const useCounter = () => useContext(CounterContext);

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0);
    const [loader, setLoader] = useState(false);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const asyncIncrement = () => {
        setLoader(true);
        setTimeout(() => {
            increment();
            setLoader(false)
        }, 3000);
    };

    const value = {
        counter,
        increment,
        decrement,
        loader,
        asyncIncrement
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}
