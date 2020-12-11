import React, { useState } from 'react'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 0,
        counter2: 1,
        counter3: 2
    })

    const {counter1} = state

    return (
        <>
            <h1>Counter {counter1}</h1>
            <button className="btn btn-primary" onClick={()=>setState({
                ...state,
                counter1: counter1+1
            })
            }>
                +1
            </button>
        </>
    )
}
