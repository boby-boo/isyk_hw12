import React, { useEffect } from 'react';
import './ListItem.css';
import removeBtn from '../../assets/images/remove-btn.svg';

const ListItem = ({ task, removeItem, completedTask }) => {
    const {id, isDone, item} = task 
    console.log('ListItem')

    useEffect(() => {
        console.log(' useEffect ListItem')
    }, [isDone])

    return (
        <li id={id} className={`${isDone ? 'task task-completed' : 'task'}`}>
            <input 
                type="checkbox" 
                checked={isDone}
                onChange={() => completedTask(id)}
            />
            <p>
                {item}
            </p>
            <button className='button remove-btn' onClick={() => removeItem(id)}>
                <img src={removeBtn}/>
            </button>
        </li>
    );
};

export default React.memo(ListItem);
