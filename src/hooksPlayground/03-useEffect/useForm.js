import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState)
        
    const handleOnChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return [formState, handleOnChange]
}