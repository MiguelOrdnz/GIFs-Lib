import React from 'react'
import { useForm } from './useForm'

export const FormCustomHook = () => {

    const [formState, handleOnChange] = useForm({
        name: '',
        email: ''
    })
    
    const {name, email} = formState

    return (
        <div className="form-group">
            <input 
                type="text"
                name='name'
                className='form-control'
                placeholder='name'
                value={name}
                onChange={handleOnChange}
            />
            <input 
                type="text"
                name='email'
                className='form-control'
                placeholder='email@example.com'
                value={email}
                onChange={handleOnChange}
            />
        </div>
    )
}
