import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) =>{
        setInputValue(e.target.value);
    } 

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0){
            setCategories( (categories) => [...new Set([inputValue, ...categories])] )
            setInputValue('')
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                placeholder='Buscar'
                type='text' 
                value = { inputValue }
                onChange = { handleOnChange }
            />
        </form>
    )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}