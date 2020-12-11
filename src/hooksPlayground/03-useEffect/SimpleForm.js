import React, { useEffect, useState } from 'react'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    
    const {name, email} = formState

    const handleOnChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log('> Form cargó');
    }, [])

    useEffect(() => {
        console.log('> formState cambió');
    }, [formState])

    useEffect(() => {
        console.log('> email cambió');
    }, [email]);

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
