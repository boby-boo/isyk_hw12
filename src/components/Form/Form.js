import React, { useState, useEffect } from 'react';
import './Form.css';
import { v4 } from 'uuid';
import addBtn from '../../assets/images/add-btn.svg';

const Form = ({ todo, setTodo }) => {
    console.log('Form')
    const [textValue, setTextValue] = useState('')

    const handleChange = (event) => {
        setTextValue(event.target.value)
    }

    const addNewTask = (event) => {
        event.preventDefault()
        if (textValue === '') return; 

        const id = v4()
        const isDone = false
        setTodo([...todo, {item: textValue, id, isDone}])
    
        setTextValue('')
    }

    return (
        <form onSubmit={addNewTask}>
            <input 
                className='text-field'
                type='text'
                value={textValue}
                onChange={handleChange}
            />
            <button className='button add-btn'>
                new task
                <img src={addBtn}/>
            </button>        
        </form>
    );
};

export default React.memo(Form);
