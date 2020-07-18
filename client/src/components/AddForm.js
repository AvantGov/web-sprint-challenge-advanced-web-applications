import React, { useState } from 'react';
import { axiosWAuth } from '../utils/axiosWAuth';

const AddForm = () => { 

    const [userInput, setUserInput] = useState({})

    const handleChangeColor = (event) => {
        event.preventDefault()
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
        console.log('add form input:', userInput)
    }
    
    const handleChangeHex = (event) => {
        event.preventDefault()
        setUserInput({
            ...userInput,
            code: {[event.target.name]: event.target.value}
        })
        console.log('add form input:', userInput)
    }
    
    const handleAdd = (event) => {
        event.preventDefault()
        axiosWAuth()
        .post('/colors', userInput)
            .then((response) => {
                console.log(response)
                window.location.reload(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div className='add-form-container'>
        <label htmlFor='color'></label>
        <input 
            className='add-form-container__input'
            name='color'
            onChange={handleChangeColor}
            placeholder='color name'
            type='text'
        />
        <label htmlFor='hex'></label>
        <input 
            className='add-form-container__input'
            name='hex'
            onChange={handleChangeHex}
            placeholder='hex code'
            type='text'
        />
        <button 
            className='add-form-container__button'
            onClick={handleAdd}
        >Add Color</button>
        </div>
    )
}

export default AddForm;