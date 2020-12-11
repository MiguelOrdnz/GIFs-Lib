import React from 'react'
import { FormCustomHook } from './03-useEffect/FormCustomHook'
import { CounterApp } from './CounterApp'

export const HooksPlayground = () => {
    return (
        <div>
            <CounterApp />
            <hr/>
            <FormCustomHook />
        </div>
    )
}
