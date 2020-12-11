import { useState } from "react"

export const useCounter = (initVal = 0, max = null, min = null) => {
    const [state, setstate] = useState({
        counter: initVal,
        max: max,
        min: min
    });

    const applyConstraints = (value) => {
        if (value >= state.max) {
            return state.max;
        }else if (value <= state.min) {
            return state.min;
        } else {
            return value;
        }
    };

    const {counter} = state

    const increase = () => {
        setstate({
            ...state,
            counter: applyConstraints(counter + 1)
        });
    };

    const decrease = () => {
        setstate({
            ...state,
            counter: applyConstraints(counter - 1)
        });
    };

    return {counter, increase, decrease};
}
